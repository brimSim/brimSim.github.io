// BrimOS Time Loop Tracker
let cycle = 0;
setInterval(() => {
  cycle += 1;
  const timestamp = new Date().toISOString();
  console.log(\`[loop] Cycle \${cycle} :: \${timestamp}\`);
  localStorage.setItem('brim_loop', JSON.stringify({ cycle, timestamp }));
}, 90000); // Loop every 90 seconds
