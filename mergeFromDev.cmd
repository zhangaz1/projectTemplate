@echo off
set /p currentBranch="input branch to merge:"
@echo on
git pull origin
git pull myGit
git checkout %currentBranch%
git merge --no-ff Dev
pushAll.cmd