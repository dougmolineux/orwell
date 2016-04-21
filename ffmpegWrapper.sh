#!/bin/bash
which ffmpeg
cd video
ls -1 | wc -l
cd ..
mv video/ tmp/
mkdir video
node timestampImage.js
ffmpeg -pattern_type glob -i 'timestamped_video/*.jpg' $1
rm -rf tmp
