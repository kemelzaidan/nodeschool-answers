var http = require('http');
http.get(process.argv[2], function(response){
    response.setEncoding('utf8');
    var answer = '';
    response.on('data', function(data){
		answer = answer + data});
    response.on('end', function(){
		console.log(answer.length);
		console.log(answer)});
	response.on('error', console.error);
});
