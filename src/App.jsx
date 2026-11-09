import { useMemo } from 'react'
import About from './components/About.jsx'
import BackToTop from './components/BackToTop.jsx'
import Contact from './components/Contact.jsx'
import Education from './components/Education.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Philosophy from './components/Philosophy.jsx'
import Projects from './components/Projects.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import TechStack from './components/TechStack.jsx'
import { navItems } from './data/profile.js'
import useScrollSpy from './hooks/useScrollSpy.js'
import { useI18n } from './i18n/LanguageContext.jsx'
import { ui } from './i18n/ui.js'
import useTheme from './hooks/useTheme.js'

// 섹션 순서: HERO → ABOUT → TECH STACK → PROJECTS → EDUCATION → PHILOSOPHY → CONTACT
export default function App() {
  const { t } = useI18n()
  const [theme, toggleTheme] = useTheme()
  const ids = useMemo(() => navItems.map((n) => n.id), [])
  const active = useScrollSpy(ids)

  return (
    <>
      <a
        href="#main"
        className="sr-only rounded-lg bg-accent px-4 py-2 font-bold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100]"
      >
        {t(ui.skip)}
      </a>
      <ScrollProgress />
      <Header theme={theme} onToggleTheme={toggleTheme} active={active} />
      <main id="main">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Education />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
