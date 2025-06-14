function loadModules() {
  fetch("seedbank.json")
    .then(res => res.json())
    .then(data => {
      const injector = document.getElementById("injector");
      data.units.forEach(unit => {
        fetch(unit.path)
          .then(res => res.text())
          .then(html => {
            const div = document.createElement("div");
            div.innerHTML = html;
            injector.appendChild(div);
          });
      });
    });
  console.log("BrimOS has ignited.");
}