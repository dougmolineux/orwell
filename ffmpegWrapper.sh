#!/bin/bash
which ffmpeg
cp -R video/ tmp/
mkdir video
node timestampImage.js
node timestampChecker.js video 
node timestampChecker.js timestamped_video
ffmpeg -pattern_type glob -i 'timestamped_video/*.jpg' $1
rm -rf tmp
