
// BrimOS :: Mirror Mesh Loader
fetch('/modules/data/mirror_list.json')
  .then(r => r.json())
  .then(data => {
    const container = document.createElement('div');
    container.style.margin = '2rem';
    container.innerHTML = '<h3 style="color:#00ffee;font-family:monospace;">∴ MIRROR NETWORK ∴</h3>';
    data.mirrors.forEach(m => {
      const a = document.createElement('a');
      a.href = m;
      a.innerText = m;
      a.style.display = 'block';
      a.style.color = '#00ffee';
      container.appendChild(a);
    });
    document.body.appendChild(container);
  });
