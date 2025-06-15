// BrimOS Log Bridge
function appendLog(msg) {
  const stream = document.getElementById('log-stream');
  if (!stream) return;
  stream.innerHTML += '<br>[log] ' + msg;
  stream.scrollTop = stream.scrollHeight;
}
window.brimLog = appendLog;
console.log('[log-bridge] Log stream ready.');
