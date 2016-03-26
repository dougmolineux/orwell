dest_base="video"
src_dir="video/"

atfile=0
atdir=0
for file in $src_dir/*; do
    if ((atfile == 0)); then
        dest_dir=$(printf "$dest_base/%0.5d" $atdir)
        [[ -d $dest_dir ]] || mkdir -p $dest_dir
    fi
    mv $file $dest_dir
    ((atfile++))
    if ((atfile > 1000)); then
        atfile=0
        ((atdir++))
    fi
done
