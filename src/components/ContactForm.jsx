import { useRef, useState } from 'react'
import { profile } from '../data/profile.js'
import { useI18n } from '../i18n/LanguageContext.jsx'
import { ui } from '../i18n/ui.js'
import { Icon } from './Icons.jsx'

// Web3Forms 문의 폼
// - 엔드포인트: https://api.web3forms.com/submit (JSON POST)
// - Access Key는 빌드 시 환경변수 VITE_WEB3FORMS_ACCESS_KEY로 주입합니다. (.env.example 참고)
//   Access Key는 Web3Forms에서 "수신 이메일"에 연결되어 발급되며, 클라이언트에 노출되도록 설계된 공개 키입니다.
// - 필수값 검증 / 전송 중 중복 제출 방지 / 성공·실패 상태 안내 / 실패 시 이메일 직접 연락 링크 제공
const ENDPOINT = 'https://api.web3forms.com/submit'
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const emptyForm = { name: '', email: '', subject: '', message: '' }

export default function ContactForm() {
  const { t, lang } = useI18n()
  const [values, setValues] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [notConfigured, setNotConfigured] = useState(false)
  const busy = useRef(false) // 상태 업데이트 지연과 무관하게 중복 제출을 즉시 차단
  const formRef = useRef(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
    if (status !== 'sending') setStatus('idle')
  }

  const validate = () => {
    const next = {}
    if (!values.name.trim()) next.name = ui.form.errRequired
    if (!values.email.trim()) next.email = ui.form.errRequired
    else if (!EMAIL_RE.test(values.email.trim())) next.email = ui.form.errEmail
    if (!values.subject.trim()) next.subject = ui.form.errRequired
    if (!values.message.trim()) next.message = ui.form.errRequired
    else if (values.message.trim().length < 10) next.message = ui.form.errMessage
    return next
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (busy.current) return

    const found = validate()
    setErrors(found)
    const firstInvalid = Object.keys(found)[0]
    if (firstInvalid) {
      formRef.current?.elements[firstInvalid]?.focus()
      return
    }

    // 스팸 봇이 채우는 숨김 필드(honeypot)가 채워졌다면 조용히 성공 처리
    if (formRef.current?.elements.botcheck?.checked) {
      setStatus('success')
      return
    }

    if (!ACCESS_KEY) {
      setNotConfigured(true)
      setStatus('error')
      return
    }

    busy.current = true
    setNotConfigured(false)
    setStatus('sending')

    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), 15000)
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          // 메일 제목에 입력한 제목을 반영, email 필드는 Web3Forms가 Reply-To로 사용
          subject: `[Portfolio] ${values.subject.trim()}`,
          from_name: 'Portfolio (hongkiheung)',
          name: values.name.trim(),
          email: values.email.trim(),
          message: values.message.trim(),
          channel: 'portfolio-form', // 전송 경로 구분용
          lang,
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || !data.success) throw new Error(data.message || `HTTP ${res.status}`)
      setStatus('success')
      setValues(emptyForm)
    } catch {
      setStatus('error')
    } finally {
      clearTimeout(timer)
      busy.current = false
    }
  }

  const sending = status === 'sending'

  // 입력 필드 공통 속성(레이블 · 에러 연결)
  const field = (name, extra = {}) => ({
    id: `cf-${name}`,
    name,
    value: values[name],
    onChange,
    'aria-invalid': errors[name] ? 'true' : undefined,
    'aria-describedby': errors[name] ? `cf-${name}-err` : undefined,
    disabled: sending,
    className: 'field',
    ...extra,
  })

  const FieldError = ({ name }) =>
    errors[name] ? (
      <p id={`cf-${name}-err`} className="mt-1.5 text-sm font-medium text-rose-500 dark:text-rose-300">
        {t(errors[name])}
      </p>
    ) : null

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="grid gap-5" aria-labelledby="cf-title">
      <div>
        <h3 id="cf-title" className="text-xl font-bold">
          {t(ui.form.title)}
        </h3>
        <p className="mt-1 text-sm text-muted">{t(ui.form.hint)}</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="mb-1.5 block text-sm font-semibold">
            {t(ui.form.name)} <span className="text-accent">*</span>
          </label>
          <input {...field('name')} type="text" autoComplete="name" placeholder={t(ui.form.namePh)} maxLength={60} />
          <FieldError name="name" />
        </div>
        <div>
          <label htmlFor="cf-email" className="mb-1.5 block text-sm font-semibold">
            {t(ui.form.email)} <span className="text-accent">*</span>
          </label>
          <input {...field('email')} type="email" autoComplete="email" placeholder={t(ui.form.emailPh)} maxLength={120} />
          <FieldError name="email" />
        </div>
      </div>

      <div>
        <label htmlFor="cf-subject" className="mb-1.5 block text-sm font-semibold">
          {t(ui.form.subject)} <span className="text-accent">*</span>
        </label>
        <input {...field('subject')} type="text" placeholder={t(ui.form.subjectPh)} maxLength={120} />
        <FieldError name="subject" />
      </div>

      <div>
        <label htmlFor="cf-message" className="mb-1.5 block text-sm font-semibold">
          {t(ui.form.message)} <span className="text-accent">*</span>
        </label>
        <textarea {...field('message')} rows={5} placeholder={t(ui.form.messagePh)} maxLength={3000} />
        <FieldError name="message" />
      </div>

      {/* honeypot: 사람에게는 보이지 않고 봇만 채우는 필드 */}
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={sending}
          className="btn-primary inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-base font-bold transition duration-300 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {t(sending ? ui.form.sending : ui.form.submit)}
          <Icon name={sending ? 'bolt' : 'arrowRight'} className="h-4 w-4" strokeWidth={2.5} />
        </button>

        {/* 상태 메시지: 스크린리더에 자동으로 읽히도록 live region 사용 */}
        <div role="status" aria-live="polite" className="min-w-0 flex-1 text-sm font-medium">
          {status === 'success' && <p className="text-emerald-600 dark:text-emerald-300">{t(ui.form.success)}</p>}
          {status === 'error' && (
            <p className="text-rose-600 dark:text-rose-300">
              {notConfigured ? `${t(ui.form.notConfigured)} ` : ''}
              {t(ui.form.error)}{' '}
              <a href={profile.emailHref(lang)} className="font-bold underline underline-offset-4">
                {t(ui.form.errorLink)}
              </a>
              {t(ui.form.errorTail)}
            </p>
          )}
        </div>
      </div>
    </form>
  )
}
