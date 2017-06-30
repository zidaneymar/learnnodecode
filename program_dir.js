var fs = require("fs");

var path = "D:\\nodecode\\learnyounode";
var filter = "txt";

var path_true = process.argv[2];
var filter_true = process.argv[3];

var mymodule = require("./readfile.js")

var my_callback = function(err, files) {
	if (err) {
		console.log(err);
	}
	
	for (var i = 0; i < files.length; i++) {
		console.log(files[i]);
	}



};





mymodule(path_true, filter_true, my_callback);



