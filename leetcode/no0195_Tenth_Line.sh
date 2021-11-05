#!/bin/sh
index=1
lines=$(cat file.txt)
while read line ; do 

    #echo "#${index}: ${line}"
    if [ $index == 10 ]; then 
        echo $line
    fi

    (( index = index + 1 ))

done <<< "echo $lines"