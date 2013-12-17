var ls = require('./ls_mod.js');
ls(process.argv[2], process.argv[3], function(err, results){
    if (err){
        console.log('Error found: ', err);
    }
    
    results.forEach(function(item) {
        console.log(item)
//        console.log (results.length)
    });
});
