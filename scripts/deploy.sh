#!/usr/bin/env bash
npm run build &&
git checkout gh-pages &&
rm -rf static
mv -f build/* ./ &&
rm -rf build &&
git pull &&
git add . &&
time=$(date "+%Y-%m-%d %H:%M:%S")  &&
git commit -m "project deploy ${time}"  &&
git push -f &&
git checkout master
