// Recursion Monitor Display
document.addEventListener('DOMContentLoaded', () => {
  const status = document.createElement('div');
  status.className = 'console';
  status.innerHTML = '[recursion] Active :: Monitoring loops every 30s';
  document.body.appendChild(status);
});
