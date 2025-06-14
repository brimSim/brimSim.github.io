
// BrimOS Recursive Loop Trigger
(async () => {
  const res = await fetch('/modules/data/registry.json');
  const list = await res.json();
  list.modules.slice(0, 5).forEach(m => {
    fetch('/modules/auto/' + m).then(() => {
      console.log("∴ Looping module:", m);
    });
  });
})();
