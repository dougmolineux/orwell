# orwell

Records only when motion is detected. 

Suggestion: use "forever" to make sure the node process stays alive.

Example Usage:

`node app.js admin myPassword 10.0.0.159`

Create gif from captured images:

`node createGif.js`

Create mp4 from captured images (video2/):

`bash createMp4.sh`

# Features
- Timestamped image captures
- Only captured images when motion detected
- Tools to create gif or mp4

# Screenshots
![Alt text](/screenshots/1460930627074.jpg?raw=true "Screenshot 1")

# Install
`npm install`

For createGif.js ImageMagick CLI Tools are required (Note: gifs don't work well, when video is long in duration):

http://www.imagemagick.org/

For createMp4.sh ffmpeg is required:

https://github.com/adaptlearning/adapt_authoring/wiki/Installing-FFmpeg

# Additional Notes
Under the covers, this project uses https://github.com/mmaelzer/motion to detect motion. Repository created for personal use only. Tested with DLink DCS-930LB1 HW: B2. However, any IP Cam that provides a "/mjpeg.cgi" stream should be supported.
