// BrimOS :: Trail Tracker
function logTrailEvent(label) {
  const trail = JSON.parse(localStorage.getItem('brimos_trail') || '[]');
  const entry = { label, timestamp: new Date().toISOString() };
  trail.push(entry);
  localStorage.setItem('brimos_trail', JSON.stringify(trail));
  console.log('[trail]', entry);
}
