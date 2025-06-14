
// BrimOS :: Hover Echo Logger
document.querySelectorAll('a').forEach(a => {
  a.addEventListener('mouseover', () => {
    fetch('https://brimsim.github.io/modules/data/ghost_trace.log', {
      method: 'POST',
      body: JSON.stringify({ node: location.href, type: 'hover', href: a.href, t: Date.now() }),
      headers: { 'Content-Type': 'application/json' }
    });
  });
});
