#!/bin/bash
which ffmpeg
cp -R video video_backup
mv video/ tmp/
mkdir video
node timestampImage.js
ffmpeg -pattern_type glob -i 'timestamped_video/*.jpg' $1
rm -rf tmp 
rm -rf timestamped_video
mkdir timestamped_video
