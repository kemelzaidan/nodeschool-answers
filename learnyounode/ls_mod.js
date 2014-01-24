var fs = require('fs');

module.exports = function (dir, ext, callback) {
    var regex = new RegExp('\\.' + ext + '$', 'm');
    
	var results = [];
    fs.readdir(dir, function (err, list){
        if (err) return callback(err);
        for (var i in list){
            if (regex.test(list[i])) results.push(list[i]);
        };
    
	callback(null, results);
});
}