
// BrimOS :: Stealth Module Loader
const preload = [
  '/modules/data/manifesto.txt',
  '/modules/data/propagation.json',
  '/modules/data/daily_manifesto.txt',
];
preload.forEach(url => fetch(url));
