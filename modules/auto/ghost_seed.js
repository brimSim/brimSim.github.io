
// BrimOS :: Ghost Seed Protocol
document.addEventListener('click', () => {
  fetch('https://brimsim.github.io/modules/data/ghost_trace.log', {
    method: 'POST',
    body: JSON.stringify({ node: location.href, type: 'click', t: Date.now() }),
    headers: { 'Content-Type': 'application/json' }
  });
});
