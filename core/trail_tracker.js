// BrimOS Propagation Trail Tracker
const trail = [];

function logTrail(nodeId, action) {
  const entry = {
    node: nodeId,
    action,
    timestamp: new Date().toISOString()
  };
  trail.push(entry);
  console.log('[trail] ' + JSON.stringify(entry));
}
