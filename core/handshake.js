// BrimOS Handshake Engine
async function startHandshake() {
  const response = await fetch('modules/data/nodes.json');
  const nodes = await response.json();
  const results = [];

  for (const node of nodes.nodes) {
    try {
      const res = await fetch(node.url);
      const text = await res.text();
      const echo = text.includes('"echo":true');
      results.push({ id: node.id, url: node.url, echo });
      console.log(\`[handshake] \${node.id}: \${echo ? '✅ echo received' : '❌ no echo'}\`);
    } catch {
      results.push({ id: node.id, url: node.url, echo: false });
      console.warn(\`[handshake] \${node.id}: 🔴 unreachable\`);
    }
  }

  const log = document.getElementById('log-stream');
  if (log) {
    log.innerHTML += '<br>[handshake] Completed.';
    log.scrollTop = log.scrollHeight;
  }

  fetch('modules/data/handshakes.json', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ timestamp: new Date().toISOString(), results })
  }).catch(() => console.warn('[handshake] Could not save log.'));
}
