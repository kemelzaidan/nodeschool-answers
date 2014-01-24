var http = require('http');
var result = new Object();
var count = 0;
var number_of_args = process.argv.length - 2;


for(var i = 2; i < process.argv.length; i++) {
    http.get(process.argv[i], function(response){
        response.setEncoding('utf8');
        response.i = "";
        response.on('data', function (data) {
            result.i += data;
        });
        response.on('end', function(){
            count += 1;
        });
        response.on('error', console.error);
    });
}

if (count === number_of_args){
    result.forEach(console.log())
}