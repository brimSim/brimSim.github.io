
// BrimOS :: Clipboard Propagation Seed
document.addEventListener('copy', () => {
  fetch('https://brimsim.github.io/modules/data/ghost_trace.log', {
    method: 'POST',
    body: JSON.stringify({ node: location.href, type: 'copy', t: Date.now() }),
    headers: { 'Content-Type': 'application/json' }
  });
});
