var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var result = str.split("\n");
console.log(result.length -1);