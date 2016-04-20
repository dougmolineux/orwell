which ffmpeg
cd video
ls -1 | wc -l
cd ..
node timestampImage.js
ffmpeg -pattern_type glob -i 'timestamped_video/*.jpg' movie.mp4
