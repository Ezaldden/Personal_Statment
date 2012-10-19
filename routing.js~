function begin(handle,path,res){
	if(typeof handle[path]==='function'){
		handle[path](res);
	}
	else
	{
		res.writeHead(404, {"Content-Type": "text/plain"});
    		res.write("404 Not found");
    		res.end();
	}
}

exports.begin=begin;
