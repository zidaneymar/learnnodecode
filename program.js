var net = require("net")


var server = net.createServer(function(socket) {
	var date = new Date();
	console.log(date);
	var year = date.getFullYear();
	var month = ("0" + (date.getMonth() + 1)).slice(-2);
	var day =  ("0" + date.getDate()).slice(-2);
	var hour =  ("0" + date.getHours()).slice(-2);
	var minute = ("0" + date.getMinutes()).slice(-2);
	var dateString = year + "-" + month + "-" + day + " " + hour + ":" + minute + '\n';
	console.log(dateString);
	socket.write(dateString);
	socket.end("");
});

server.listen(process.argv[2]);



