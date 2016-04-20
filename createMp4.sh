which ffmpeg
cd video
ls -1 | wc -l
cd ..
mv video video2
ffmpeg -pattern_type glob -i 'video2/*.jpg' movie.mp4
