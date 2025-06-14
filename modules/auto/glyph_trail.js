
// BrimOS :: Glyph Cursor Trail
const trail = document.createElement('div');
trail.innerText = '∴';
trail.style.position = 'fixed';
trail.style.pointerEvents = 'none';
trail.style.color = '#00ffeeaa';
trail.style.fontSize = '18px';
document.body.appendChild(trail);

document.addEventListener('mousemove', e => {
  trail.style.left = e.pageX + 'px';
  trail.style.top = e.pageY + 'px';
});
