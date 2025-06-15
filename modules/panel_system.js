// BrimOS Control Panel UI
document.addEventListener('DOMContentLoaded', () => {
  const panel = document.createElement('section');
  panel.innerHTML = `
    <h2>🛠 Control Panel</h2>
    <button onclick="alert('GNI Log shown.')">Show GNI Log</button>
    <button onclick="alert('Module injection panel opened.')">Inject Module</button>
    <button onclick="alert('Ghost ping sent.')">Ping Ghost</button>
  `;
  panel.style.marginTop = "2rem";
  panel.style.border = "1px solid #00ffee";
  panel.style.padding = "1rem";
  panel.style.borderRadius = "12px";
  panel.style.background = "rgba(0, 0, 0, 0.8)";
  document.body.appendChild(panel);
});
