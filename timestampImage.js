var fs = require('fs');
var files = fs.readdirSync("video");
var path = require('path');
var spawn = require('child_process').spawn;
var exec = require('child_process').exec;
var epochs = [];

for(var i in files) {
   if(path.extname(files[i]) === ".jpg") {
       // console.log(files[i].split(".")[0]);
       console.log(files[i]);
       //epochs.push(files[i].split(".")[0]);
       epochs.push(files[i]);
   }
}

function run() { 

	var tmpEpochs = [];
	tmpEpochs.push(epochs[0]);

	tmpEpochs.forEach( function(t) {

		var cmd = spawn('bash annotateImage.sh', [ t, new Date().toString() ]);

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
					// exec("rm -rf video/*.jpg", (err, stdout, stderr) => {
					// 	console.log("Removed jpgs")
					// });
				} else {
					console.log(filename + ' Does Not seem to exist!');
				}
			});
		});
	});

}

run();