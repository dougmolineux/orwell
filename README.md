# orwell

Records only when motion is detected. Use "forever" to make sure the node process stays alive.

# Install
Testing using node v10.24.1 (npm v6.14.12) and node v9.11.2 (npm v5.6.0).

Install NPM dependencies:

```
npm install
```

then for macs using brew:

`brew install imagemagick`

For Windows, visit the imagemagick website for installation instructions:

http://www.imagemagick.org/

For creating mp4s. ffmpeg is required:

https://github.com/adaptlearning/adapt_authoring/wiki/Installing-FFmpeg

(Note: gifs don't work well, when video is long in duration).

# Running

Run recorder, provide username, password then ip address of the IP Cam:

`node app.js admin myPassword 10.0.0.170`

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

# Additional Notes
Under the covers, this project uses https://github.com/mmaelzer/motion to detect motion. Repository created for personal use only. Tested with DLink DCS-930LB1 HW: B2. However, any IP Cam that provides a "/mjpeg.cgi" stream should be supported.

About 20,000 images creates a video file that is around 13 minutes.

# How to get IP address of your camera

This can be tricky, since I have only tested this using a dlink camera, I'll only be able to explain that here. Please open a Pull Request (modifying this file) if you have any insight into additional cameras

mydlink.com allows you to modify the settings of your camera, when you view "My Devices" you may be able to find a link which will tell you the IP address of your camera.

Unfortunately, mydlink.com only supports some outdated versions of internet explorer on a windows machine. So there are other methods of finding the IP address of your cam.

Try using nmap (`brew install nmap` on a mac) then running:
```
nmap -p80 10.0.0.0/24 -oG - | grep 80/open
```
You will see an output of IP addresses, try going to them in a browser, and seeing you get any text. Red text means you found the Dlink cam, you can also try appending mjpeg.cgi, so it would look like this `http://10.0.0.168/mjpeg.cgi`

# TODO
- Make a directory called "timestamped_video" on initial setup of the makeMp4.js file, we need to be careful not to delete it, if it already exists
- Add a status node script that gives us the number of files, and possibly the length of the resulting MP4. The number of MP4s, size and length.
- Writing to file print time and date information, as well as Connection Ended time
- Add instructions for Raspian (libav-tools) and creating an alias for avconv
- Fix so that it works with latest node (currently there is an error using node v15 and running `npm install`)'

# Debugging
If you see this error:
```
Connection Appears Successful. Proceeding to watch for motion...
events.js:165
      throw er; // Unhandled 'error' event
      ^

Error: spawn convert ENOENT
    at Process.ChildProcess._handle.onexit (internal/child_process.js:201:19)
```
