
// BrimOS Integrity Scanner
(async function(){
  console.log("[Integrity Scan] Starting...");
  const response = await fetch('/modules/registry.json');
  const files = await response.json();
  files.modules.forEach(name => {
    fetch(`/modules/auto/${name}`).then(r => {
      if (!r.ok) console.warn("[Missing]", name);
    }).catch(() => console.warn("[Error]", name));
  });
})();
