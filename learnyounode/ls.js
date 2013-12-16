var fs = require('fs');
var file = process.argv[2];
var regex = new RegExp('\\.'+process.argv[3]+'$', 'm');

fs.readdir(file, function (err, list){
	if (err) throw err;
	for (var i in list){
		if (regex.test(list[i])) console.log(list[i]);
	};
});
