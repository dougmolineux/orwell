# orwell

Records only when motion is detected. Use "forever" to make sure the node process stays alive.

Run recorder:

`node app.js admin myPassword 10.0.0.159`

Process captured images:
```
# create mp4 from captured images:
node makeMp4.js

# create gif from captured images:
node makeGif.js`
```

# Features
- Timestamped image captures
- Only captured images when motion detected
- Tools to create gif or mp4

# Screenshots
![Alt text](/screenshots/1460930627074.jpg?raw=true "Screenshot 1")

# Install
`npm install`

For creating mp4s ffmpeg is required:

https://github.com/adaptlearning/adapt_authoring/wiki/Installing-FFmpeg

For creating gifs ImageMagick CLI Tools are required (Note: gifs don't work well, when video is long in duration):

http://www.imagemagick.org/

# Additional Notes
Under the covers, this project uses https://github.com/mmaelzer/motion to detect motion. Repository created for personal use only. Tested with DLink DCS-930LB1 HW: B2. However, any IP Cam that provides a "/mjpeg.cgi" stream should be supported.

# TODO
- Add a status node script that gives us the number of files, and possibly the length of the resulting MP4. The number of MP4s, size and length.
- Writing to file print time and date information, as well as Connection Ended time
- Count the number of files in video/ and in timestamped_video
