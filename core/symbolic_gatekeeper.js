// Symbolic Access Gate
function unlockBySymbol(input) {
  const gate = { "∴↻⧉⨀∵": true };
  if (gate[input]) {
    document.body.innerHTML += '<div style="color:#0f0;">[unlocked] Access granted.</div>';
  } else {
    document.body.innerHTML += '<div style="color:#f00;">[denied] Incorrect AytherCode.</div>';
  }
}
