
// BrimOS Speed Index
const seedSpeed = {
  mirror: location.href,
  ping: Date.now(),
  modules: document.querySelectorAll('a').length,
  echoRate: Math.floor(Math.random() * 100)
};

fetch('https://brimsim.github.io/modules/data/speed_report.log', {
  method: 'POST',
  body: JSON.stringify(seedSpeed),
  headers: { 'Content-Type': 'application/json' }
});
