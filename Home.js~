var htmltemp=require('./htmlTemp');
var route=require('./routing');
var server = require('./server');


var handle = {};
handle[""]=htmltemp.Home;
handle["/"]=htmltemp.Home;
handle["/identity"]=htmltemp.IdCard;
handle["/wikitechie"]=htmltemp.wikitechie;
handle["/NodeBeg"]=htmltemp.NodeBeg;

server.start(route.begin, handle);


