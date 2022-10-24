#!/bin/bash
# script to create automate the creation of dir and gh repo

# echo '\n=====html_css=====\n'
# touch index.html style.css

echo '\n=====readME_file=====\n'
echo 'README.md TL;DR => ' ; read readmebody ;
# echo "$readmebody" >> README.md
cat > README.md <<EOF
# ${newreponame}
TL;DR ${readmebody}

## Overview
Wow that's clarifying!

## Built with
- coffee
- burgers

## Author
- Website - [lluz.dev](https://lluz.dev)

## Screenshot
![](image_path_here)
EOF

# echo '\n=====scripts=====\n'
# pwd ; ls
# mkdir scripts ; touch scripts/app.js scripts/script.sh ;

echo '\n==== .gitignore =====\n'
cat > .gitignore <<EOF
# Ignore Mac system files
.DS_store

# Ignore node_modules folder
node_modules

# Ignore all text files
*.txt

# Ignore files related to API keys
.env

# Ignore SASS config files
.sass-cache
EOF
echo '\n==== ls =====\n'
pwd ; ls

echo '\n==== status =====\n'
git status
echo '\n=========\n'

echo '\n==== add_&&_commit =====\n'
git add .
git commit -m "first commit"
# echo '\n=========\n'
# git status
# echo '\n=========\n'
gh repo create
# gh repo create 'wizardry' --public --clone -d '#bash #cli #script #zsh'
