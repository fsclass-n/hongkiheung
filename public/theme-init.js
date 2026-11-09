// 첫 페인트 전에 저장된/시스템 테마를 적용해 깜빡임(FOUC)을 방지합니다.
(function () {
  try {
    var saved = localStorage.getItem('theme');
    var dark = saved ? saved === 'dark' : !window.matchMedia('(prefers-color-scheme: light)').matches;
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  } catch (e) {
    document.documentElement.dataset.theme = 'dark';
  }
})();
