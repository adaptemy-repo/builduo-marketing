#!/bin/bash

CYPRESS='cypress'
VISUAL_REPORTS='visual-test-reports'
SNAP_ERRORS='snap_errors'

cd "./${CYPRESS}/${VISUAL_REPORTS}"

if [ -d ${SNAP_ERRORS} ]; then
    cd ${SNAP_ERRORS}
    find . -type f | grep "\.png" > images.txt
    cd ../
fi

FILE="./${SNAP_ERRORS}/images.txt"

if [ -f ${FILE} ]; then
DIFF="window.differences = ["
    while read LINE; do

        sub=${LINE##*/}
        name=${sub%%.*}

        URL="./${SNAP_ERRORS}/${LINE#./}"
        DIFF=${DIFF}"{name: '${name}',url: '${URL}'},"

    done < ${FILE}

    DIFF="${DIFF%,*} ${DIFF##*,}"
    echo ${DIFF}"]" > "./${SNAP_ERRORS}/differences.js"
fi