// Echo Status Visual
document.addEventListener('DOMContentLoaded', () => {
  const echo = document.getElementById('brimos-echo');
  const visual = document.createElement('div');
  visual.className = 'console';

  if (echo) {
    const data = JSON.parse(echo.textContent);
    visual.innerHTML = '[echo] Beacon active — ' + data.node + ' (' + data.timestamp + ')';
  } else {
    visual.innerHTML = '[echo] ❌ No echo beacon detected.';
  }

  document.body.appendChild(visual);
});
