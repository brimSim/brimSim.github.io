// BrimOS Outbound Echo Injector
document.addEventListener('DOMContentLoaded', () => {
  const echo = document.createElement('a');
  echo.href = 'https://brimsim.github.io/ghost/';
  echo.textContent = '∵ Outbound Echo Pulse';
  echo.style.display = 'none';
  echo.rel = 'nofollow';
  document.body.appendChild(echo);
  console.log('[echo] Outbound link seeded.');
});
