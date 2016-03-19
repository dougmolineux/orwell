var exec = require('child_process').exec;
var filename = new Date().getTime() + ".gif";
var cmd = 'convert -delay 2 -loop 0 "video/*.jpg" ' + filename;
var fs = require("fs");

exec(cmd, function(error, stdout, stderr) {
	console.log("error", error);
	console.log("stdout", stdout);
	console.log("stderr", stderr);
	console.log("Finished making " + filename);

	fs.stat(filename, function(err, stat) {
    		if(err == null) {
        		console.log(filename + ' Confirmed to exist');
    		} else {
        		console.log('Error: ', err);
    		}
	});

});
