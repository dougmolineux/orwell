#!/bin/bash
# Script that annotates
# $1 timestamp number (for filename, without the video prefix)
# $2 string that is added to each image
convert video/$1 \
          -fill '#0008' -draw 'rectangle 5,128,240,145' \
          -fill white   -annotate +10+141 $2 \
          timestamped_video/$1
