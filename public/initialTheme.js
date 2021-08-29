(() => {
  const checkDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (
    (checkDark && !localStorage.getItem('cookingFit_dark_manual')) ||
    localStorage.getItem('cookingFit_dark')
  ) {
    document.documentElement.setAttribute('theme', 'dark');
  }
})();
