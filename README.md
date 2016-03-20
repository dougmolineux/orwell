# ipcamrecorder

Records only when motion is detected. Files go into /video directory. 

Example Usage:
`node app.js admin myPassword 10.0.0.159`

Create gif from captured images:
`node createGif.js`

Tested with DLink DCS-930LB1 HW: B2

This uses https://github.com/mmaelzer/motion to detect motion. Repo created for personal use only.
