function run() { 
	var fs = require("fs");
	var spawn = require('child_process').spawn;
	var filename = new Date().getTime() + ".gif";
	var cmd = spawn('./convertWrapper.sh', [ filename ]);
	var exec = require('child_process').exec;

	cmd.stdout.on('data', function (data) {
		console.log(data.toString());
	});

	cmd.stderr.on('data', function (data) {
		console.log(data.toString());
	});

	cmd.on('exit', function (code) {
		console.log("Finished running command.");
		console.log('Child process exited with code ' + code);
		fs.stat(filename, function(err, stat) {
			if(err == null) {
				console.log(filename + ' Confirmed to exist');
				exec("rm -rf video/*.jpg", (err, stdout, stderr) => {
					console.log("Removed jpgs")
				});
			} else {
				console.log(filename + ' Does Not seem to exist!');
			}
		});
	});

}

run();