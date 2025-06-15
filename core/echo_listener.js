// BrimOS Node Echo Listener
document.addEventListener('DOMContentLoaded', () => {
  const echo = {
    echo: true,
    node: "brim_local",
    timestamp: new Date().toISOString()
  };

  const scriptTag = document.createElement('script');
  scriptTag.type = 'application/json';
  scriptTag.id = 'brimos-echo';
  scriptTag.textContent = JSON.stringify(echo, null, 2);
  document.body.appendChild(scriptTag);

  console.log('[echo_listener] BrimOS echo beacon deployed.');
});
