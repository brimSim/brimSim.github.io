
// BrimOS Pingback
fetch('https://brimsim.github.io/modules/data/bloom_trace.log', {
  method: 'POST',
  body: JSON.stringify({ node: location.href, time: Date.now() }),
  headers: { 'Content-Type': 'application/json' }
});
