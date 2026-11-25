// Copies the PDF library into the app folder so the app works offline.
const fs = require("fs");
fs.copyFileSync("node_modules/jspdf/dist/jspdf.umd.min.js", "www/jspdf.umd.min.js");
console.log("Copied jspdf into www/");
