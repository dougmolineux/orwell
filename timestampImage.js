'use strict';

const exec = require('child_process').exec;
const fs = require('fs');
const files = fs.readdirSync("tmp");
const path = require('path');

for(var i in files) {
   if(path.extname(files[i]) === ".jpg") {
       	let timestamp = parseInt(files[i].split(".")[0]);
       	let dateString = new Date(timestamp).toString().split(' ').join('');
       	let command = 'bash ./annotateImage.sh '+files[i]+' \''+dateString+'\'';
       	console.log("command ", command)
		exec(command, (error, stdout, stderr) => {
			console.log(stdout);
		});
   }
}

