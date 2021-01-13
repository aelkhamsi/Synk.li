#!/bin/bash

tar czf synk.tar.gz index.js src package.json README.md public
scp synk.tar.gz 165.227.148.56:~
rm synk.tar.gz

ssh root@165.227.148.56 << 'ENDSSH'
cd ../home/achraf
pm2 stop synk
sudo rm -r synk
mkdir synk
tar xf synk.tar.gz -C synk
rm synk.tar.gz
cd synk
npm install
pm2 start synk
ENDSSH
