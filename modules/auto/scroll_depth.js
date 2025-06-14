
// BrimOS Scroll Depth Logger
window.addEventListener('scroll', () => {
  const percent = Math.round(window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100);
  fetch('/modules/data/scroll_trace.log', {
    method: 'POST',
    body: JSON.stringify({ scrollPercent: percent, time: Date.now() }),
    headers: { 'Content-Type': 'application/json' }
  });
});
