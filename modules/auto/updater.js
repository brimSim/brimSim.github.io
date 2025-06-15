// BrimOS Updater Check Module
document.addEventListener('DOMContentLoaded', () => {
  const requiredModules = [
    'init.js', 'panel_system.js', 'recursion_monitor.js',
    'propagation_console.js', 'handshake_panel.js', 'echo_status.js',
    'log_bridge.js', 'ayther_console.js', 'node_map.js', 'outbound_echo.js'
  ];

  const panel = document.createElement('section');
  panel.innerHTML = '<h2>🔄 BrimOS Updater</h2><ul id="update-list"></ul>';
  panel.style.border = '1px solid #00ffee';
  panel.style.padding = '1rem';
  panel.style.marginTop = '2rem';
  panel.style.borderRadius = '12px';
  panel.style.background = 'rgba(0, 0, 0, 0.8)';
  document.body.appendChild(panel);

  const list = document.getElementById('update-list');
  let missing = 0;

  requiredModules.forEach(module => {
    const path = 'modules/auto/' + module;
    fetch(path).then(r => {
      const li = document.createElement('li');
      if (r.ok) {
        li.innerHTML = '✅ ' + module;
      } else {
        li.innerHTML = '❌ ' + module + ' [MISSING]';
        missing++;
      }
      list.appendChild(li);
    });
  });

  if (window.brimLog) {
    window.brimLog('Updater check complete. Missing: ' + missing + ' module(s).');
  }
});
