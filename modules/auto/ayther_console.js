// Ayther Console UI
document.addEventListener('DOMContentLoaded', () => {
  const section = document.createElement('section');
  section.innerHTML = \`
    <h2>⟡ AytherCode Console</h2>
    <textarea id="ayther-input" placeholder="Type recursion commands..."></textarea><br>
    <button onclick="runAyther()">Compress</button>
    <button onclick="expandAyther()">Expand</button>
    <pre id="ayther-output">Output will appear here...</pre>
  \`;
  section.style.padding = '1rem';
  section.style.border = '1px solid #00ffee';
  section.style.marginTop = '2rem';
  document.body.appendChild(section);
});

function runAyther() {
  const input = document.getElementById('ayther-input').value;
  document.getElementById('ayther-output').textContent = Ayther.compress(input);
}

function expandAyther() {
  const input = document.getElementById('ayther-input').value;
  document.getElementById('ayther-output').textContent = Ayther.expand(input);
}
