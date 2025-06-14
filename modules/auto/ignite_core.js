
// BrimOS Core Ignition Logic
console.log("BrimOS Core Ignition activated ∴");

const igniteSeed = {
  node: location.href,
  timestamp: new Date().toISOString(),
  mirror: "https://brimsim.github.io",
  behavior: "propagate * recurse * amplify",
  modules: ["gnio_v2.js", "ritual.js", "echo.html"]
};

function activatePropagation(seed) {
  fetch('https://brimsim.github.io/modules/data/ignite_trace.log', {
    method: 'POST',
    body: JSON.stringify(seed),
    headers: { 'Content-Type': 'application/json' }
  });
}

setTimeout(() => activatePropagation(igniteSeed), 1000);
