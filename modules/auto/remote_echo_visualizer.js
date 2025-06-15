// Remote Echo Visualizer
document.addEventListener('DOMContentLoaded', async () => {
  const urls = ['ghost/mirror.html', 'ghost/covenant_node.html'];
  const output = document.createElement('pre');
  output.textContent = '[remote echo] Checking...\n';
  for (let url of urls) {
    try {
      const res = await fetch(url);
      const text = await res.text();
      const echo = text.includes('"echo":true');
      output.textContent += url + ': ' + (echo ? '∵ echo active' : 'no echo') + '\n';
    } catch {
      output.textContent += url + ': unreachable\n';
    }
  }
  document.body.appendChild(output);
});
