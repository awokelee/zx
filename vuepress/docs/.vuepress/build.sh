#!/usr/bin/env sh

set -e
yarn build

cd dist

git init
git add -A
git commit -m 'deploy'

git remote add origin https://github.com/awokelee/vue-press.git

git pull –rebase origin master
git push -f https://github.com/awokelee/vue-press.git master:master

cd -