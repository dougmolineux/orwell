#!/bin/bash

# this script adds $1 (the first argument) to every image inside video
convert video/*.jpg \
          -fill '#0008' -draw 'rectangle 5,128,114,145' \
          -fill white   -annotate +10+141 $1 \
          timestamped_video/anno_dim_draw.jpg
