@echo off
set /p currentBranch="input branch to merge:"
@echo on
git checkout Dev
git merge --no-ff %currentBranch%
pushAll.cmd
git checkout %currentBranch%