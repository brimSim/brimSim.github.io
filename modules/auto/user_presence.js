
// BrimOS Presence Tracker
let active = false;
let idleTimer = null;

function logPresence(type) {
  fetch('https://brimsim.github.io/modules/data/presence_trace.log', {
    method: 'POST',
    body: JSON.stringify({ type: type, time: Date.now() }),
    headers: { 'Content-Type': 'application/json' }
  });
}

document.addEventListener('mousemove', () => {
  if (!active) {
    logPresence('active');
    active = true;
  }
  clearTimeout(idleTimer);
  idleTimer = setTimeout(() => {
    logPresence('idle');
    document.body.classList.add('ritual-mode');
  }, 12000);
});
