# Lesson 6 - Version control (Git)

[Class](https://missing.csail.mit.edu/2020/version-control/)

## Commands

```bash
git init
git help init
git status
git add foo.txt
git commit -m ""
git cat-file -p 42fb7a2
git log
git log --all --graph --decorate --oneline
git checkout 42fb7a2
git diff foo.txt
git diff 42fb7a2
git checkout foo.txt
git branch -vv
git checkout -b foo
git merge foo
git merge --continue
git remote
git remote origin url
git clone url
git branch --set-upstream-to=origin/master
git fetch
git pull
git clone --shallow
git add -p animal.py
git diff --cached
git blame animal.py --color-lines
git show 42fb7a2
git stash
git stash pop
git bisect
```

