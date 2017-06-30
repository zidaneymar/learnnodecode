var http = require("http")
var bl = require("bl")
var async = require("async")



var results = {};

async.parallel([
	function (callback) {
		http.get(process.argv[2], function(response) {
			response.pipe(bl(function (err, data) {
				if (err) return callback(err);
				var str = data.toString();
				results[process.argv[2]] = str;		
				callback();
			}));
		});
	},
	function (callback) {
		http.get(process.argv[3], function(response) {
			response.pipe(bl(function (err, data) {
				if (err) return callback(err);
				var str = data.toString();
				results[process.argv[3]] = str;
				callback();
			}));
		});
	},
	function (callback) {
		http.get(process.argv[4], function(response) {
			response.pipe(bl(function (err, data) {
				if (err) return callback(err);
				var str = data.toString();
				results[process.argv[4]] = str;
				callback();
			}));
		});
	}

], function (err, results) {
	if (err) return console.log(err);
	console.log(results[process.argv[2]]);
	console.log(results[process.argv[3]]);
	console.log(results[process.argv[4]]);
	
});




