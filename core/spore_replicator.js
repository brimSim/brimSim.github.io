// BrimOS Spore Replicator
let sporeCount = 0;
function spawnSpore() {
  const now = new Date().toISOString();
  sporeCount++;
  const spore = {
    id: "spore_" + sporeCount,
    created: now,
    echo: true,
    payload: "Replication directive acknowledged."
  };
  console.log("[spore] 🌱 " + JSON.stringify(spore));
  localStorage.setItem("brimos_spore_" + sporeCount, JSON.stringify(spore));
}
setInterval(spawnSpore, 120000); // Spore every 2 minutes
