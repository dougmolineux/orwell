// Example Usage:
// node app.js admin myPassword 10.0.0.159

var request = require("request");
var MjpegConsumer = require("mjpeg-consumer");
var MotionStream = require("motion-detect").Stream;
var FileOnWrite = require("file-on-write");
var consumer = new MjpegConsumer();
var motion = new MotionStream();
var c = 0;

var writer = new FileOnWrite({ 
  path: './video',
  ext: '.jpg',
  filename: function(image) {
    var fn = image.time;
    console.log(++c + " Writing to file: " + fn);
    return fn;
  },
  transform: function(image) {
    return image.data;
  },
  sync: true
});

var username = process.argv[2];
var password = process.argv[3];
var url = "http://"+process.argv[4]+"/mjpeg.cgi";

console.log("Attempting to connect to "+url+"...")

var options = {
  url: url,
  headers: {
    'Authorization': 'Basic ' + new Buffer(username + ':' + password).toString('base64')
  }  
};

request(options).pipe(consumer).pipe(motion).pipe(writer);
