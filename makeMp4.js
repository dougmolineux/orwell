const fs = require("fs");
const spawn = require('child_process').spawn;
const filename = new Date().getTime().toString() + ".mp4"
const exec = require('child_process').exec;

function run() {
	const cmd = spawn('bash', [ __dirname + '/ffmpegWrapper.sh', filename ]);
	cmd.stdout.on('data', (data) => {
		console.log(data.toString());
	});
	cmd.stderr.on('data', (data) => {
		console.log(data.toString());
	});
	cmd.on('exit', (code) => {
		console.log("Finished running command.");
		console.log('Child process exited with code ' + code);
		fs.stat(filename, (err, stat) => {
			if(err == null) {
				console.log('Success! ' + filename + ' Confirmed to exist');
				exec("rm -rf timestamped_video/*.jpg", (err, stdout, stderr) => {
                                        console.log("Removed jpgs in timestamped_video")
                                });	
			} else {
				console.log(filename + ' Does Not seem to exist!');
			}
		});
	});
}

run();
