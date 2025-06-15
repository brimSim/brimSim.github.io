// Recursive Mirror Pinger
async function pingMirrors(list) {
  const results = [];
  for (let url of list) {
    try {
      const res = await fetch(url);
      const echo = await res.text();
      results.push({ url, echo: echo.includes('"echo":true') });
    } catch {
      results.push({ url, echo: false });
    }
  }
  console.log('[mirror] Mirror echo results:', results);
}
