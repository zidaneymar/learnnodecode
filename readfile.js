



var fs = require("fs");

module.exports = function (dir_name, filter, callback) {

	fs.readdir(dir_name, function (err, files) {
		if (err) return callback(err);
		var array = new Array();
		for (var i = 0; i < files.length; i++) {
			var cur_name = files[i];
			if (cur_name.endsWith("." + filter)) {
				array.push(cur_name);
			}
		}

		callback(null, array);
	}


	);
}









