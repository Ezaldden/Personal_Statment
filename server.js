var http = require('http');
var url = require('url');


function start(begin, handle){
	var server = http.createServer(function(req,res){
		var path=url.parse(req.url).pathname;
		begin(handle,path,res);	
	});
	server.listen(7000);
	
}

exports.start=start;

console.log('Engine Start!');



