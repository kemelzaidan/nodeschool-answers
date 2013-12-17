module.exports = function (dir, ext, callback) {
	var fs = require('fs');
    var regex = new RegExp('\\.'+process.argv[3]+'$', 'm');
    ext = '.' + ext;
    
	var results = [];
    fs.readdir(dir, function (err, list){
        if (err) return callback(err);
        for (var i in list){
            if (regex.test(list[i])) results.push(list[i]);
        };
    
	callback(null, results);
});
}