#!/bin/sh
set -e
set -x
read -p 'Enter a destination directory: ' dest
hugo -c exampleSite/content --config exampleSite/config.toml -d $dest

cat $dest/index.json | node prebuild-index.js > $dest/prebuilt.json