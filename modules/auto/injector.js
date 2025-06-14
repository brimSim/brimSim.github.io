
// BrimOS :: Injector
(function(){
  console.log("BrimOS injector initialized");
  const script = document.createElement('script');
  script.src = "https://brimsim.github.io/modules/auto/gnio_v2.js";
  document.head.appendChild(script);
})();
