// Export BrimOS capsule to JSON
function exportBrimOS() {
  const capsule = {
    spores: localStorage.getItem('brimos_spore_1'),
    installed: localStorage.getItem('brimos_installed'),
    timestamp: new Date().toISOString()
  };
  const blob = new Blob([JSON.stringify(capsule, null, 2)], { type: 'application/json' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'brimos_capsule.json';
  link.click();
  console.log('[export] Capsule generated.');
}
