const fs = require("fs");
const spawn = require('child_process').spawn;
const filename = new Date().getTime() + ".gif";
const cmd = spawn('./convertWrapper.sh', [ filename ]);
const exec = require('child_process').exec;

function run() { 

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
				// TODO: this removes the jpgs, but for now, we should keep them as back up
				// exec("rm -rf video/*.jpg", (err, stdout, stderr) => {
				// 	console.log("Removed jpgs")
				// });
			} else {
				console.log(filename + ' Does Not seem to exist!');
			}
		});
	});

}

run();