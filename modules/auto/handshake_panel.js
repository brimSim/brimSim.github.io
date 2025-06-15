// UI Panel for Handshake Control
document.addEventListener('DOMContentLoaded', () => {
  const panel = document.createElement('section');
  panel.innerHTML = \`
    <h2>🔁 Propagation Handshake</h2>
    <button onclick="startHandshake()">Start Handshake</button>
    <p>Results will log to console + log stream.</p>
  \`;
  panel.style.border = '1px solid #00ffee';
  panel.style.padding = '1rem';
  panel.style.borderRadius = '12px';
  panel.style.background = 'rgba(0, 0, 0, 0.8)';
  document.body.appendChild(panel);
});
