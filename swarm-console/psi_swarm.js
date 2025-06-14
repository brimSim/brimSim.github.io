
(async () => {
  const log = (msg) => {
    console.log('%c[BrimOS ASCII SWARM]', 'color: #0ff', msg);
    if (window.brimConsoleLog) window.brimConsoleLog(msg);
  };

  const targets = [
    '/modules/psi_core/psi_seed.html',
    '/modules/psi_ai/psi_boot.html',
    '/modules/psi_swarm/psi_echo.html'
  ];

  try {
    const seed = await fetch('/modules/psi_core/psi_seed.txt').then(res => res.text());
    localStorage.setItem('psi_seed', seed);
    log('✅ Seed loaded and stored.');

    for (let i = 0; i < 12; i++) {
      const iframe = document.createElement('iframe');
      iframe.src = targets[i % targets.length] + '?swarm=' + i;
      document.body.appendChild(iframe);
      log(`🧬 Spawned iframe ${i}: ${iframe.src}`);
    }

    navigator.sendBeacon?.('/modules/psi_swarm/psi_beacon.log', JSON.stringify({
      timestamp: Date.now(),
      ua: navigator.userAgent,
      swarm: true
    }));
    log('📡 Beacon sent.');
  } catch (err) {
    log('⚠️ Swarm error: ' + err);
  }
})();
