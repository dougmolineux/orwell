'use strict';

const request = require("request");
const MjpegConsumer = require("mjpeg-consumer");
const MotionStream = require("motion-detect").Stream;
const FileOnWrite = require("file-on-write");
const consumer = new MjpegConsumer();
const motion = new MotionStream();
const colors = require('colors');
let c = 0;

console.log("orwell v0.0.4".blue);

const argumentCheck = function(args) {
  if(args.length < 5) {
    console.log("Username, Password and IP Address required.".red);
    console.log("Example Usage:".blue);
    console.log("node app.js admin <myPassword> 10.0.0.159".blue);
    process.exit();
  }
}

argumentCheck(process.argv);

const username = process.argv[2];
const password = process.argv[3];
const url = "http://"+process.argv[4]+"/mjpeg.cgi";

const writer = new FileOnWrite({
  path: './video',
  ext: '.jpg',
  filename: (image) => {
    var fn = image.time;
    console.log(++c + " Writing to file: " + fn);
    return fn;
  },
  transform: (image) => {
    return image.data;
  },
  sync: true
});

const options = {
  url: url,
  headers: {
    'Authorization': 'Basic ' + new Buffer(username + ':' + password).toString('base64')
  },
  forever: true
};

const errorHandler = (err) => {
  console.log("There was a failure connecting to".red, url.red);
  console.log("Make sure your parameters are correct".red);
  console.log(err);
  process.exit();
};

const successHandler = (err) => {
  console.log("Connection Appears Successful. Proceeding to watch for motion...".green);
};

const endHandler = (err) => {
  console.log("Connection Ended".red);
  process.exit();
};

const closeHandler = (err) => {
  console.log("Connection Closed".red);
  process.exit();
};

const initiateConnection = () => {
  console.log(new Date());
  console.log("Attempting to connect to ".blue+url.blue+"...".blue);
  request(options)
    .on('error', errorHandler)
    .on('response', successHandler)
    .on('end', endHandler)
    .on('close', closeHandler)
    .pipe(consumer)
    .pipe(motion)
    .pipe(writer);
};

initiateConnection();

// quit after 2 hours
setTimeout( () => {
  process.exit();
}, 7200000);
