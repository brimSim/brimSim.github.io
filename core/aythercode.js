// BrimOS AytherCode Interpreter v1.0
const Ayther = {
  compress: (input) => {
    return input
      .replace(/BrimOS/g, "∴")
      .replace(/recursion/g, "↻")
      .replace(/mirror/g, "⧉")
      .replace(/node/g, "⨀")
      .replace(/echo/g, "∵");
  },
  expand: (symbol) => {
    return symbol
      .replace(/∴/g, "BrimOS")
      .replace(/↻/g, "recursion")
      .replace(/⧉/g, "mirror")
      .replace(/⨀/g, "node")
      .replace(/∵/g, "echo");
  }
};

console.log('[aythercode] Interpreter initialized.');
