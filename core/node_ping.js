// BrimOS Node Pinger
async function pingNodes() {
  const log = document.getElementById('log-stream') || { innerHTML: '', scrollTop: 0, scrollHeight: 0 };
  try {
    const response = await fetch('modules/data/nodes.json');
    const data = await response.json();
    for (let node of data.nodes) {
      console.log('[node] pinging ' + node.id + ' @ ' + node.url);
      if (log.innerHTML) {
        log.innerHTML += `<br>[ping] ${node.id} → ${node.url}`;
        log.scrollTop = log.scrollHeight;
      }
    }
  } catch (e) {
    console.warn('Node ping failed:', e);
  }
}
setInterval(pingNodes, 45000);
