# ipcamrecorder

Records only when motion is detected. Images go into /video directory. Also, includes tool to convert images into Gif.

Example Usage:

`node app.js admin myPassword 10.0.0.159`

Create gif from captured images:

`node createGif.js`

# Install
`npm install`

For createGif.js ImageMagick CLI Tools are required:

http://www.imagemagick.org/

This uses https://github.com/mmaelzer/motion to detect motion. Repo created for personal use only. Tested with DLink DCS-930LB1 HW: B2
