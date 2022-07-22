# Lesson 1 - Shell

[Class](https://missing.csail.mit.edu/2020/course-shell/)

## Commands

```bash
date
echo Hello
which echo
pwd
cd /home
ls
mv food.md ../move-food.md
cp food.md ../move-food.md
rm ../move-food.md
rm -r /home
mkdir features
man ls
cat food.txt
tail -n1
cat < food.md >> menu.md
ls -l | tail -n2 > notes.md
echo Hello tee hello.md
sh semester | grep -i last-modified
```

## Exercises

### Number 1

[Quoting in Bash](https://www.gnu.org/software/bash/manual/html_node/Quoting.html)
[Shebang](https://en.wikipedia.org/wiki/Shebang_(Unix))

Write the following into that file, one line at a time
```bash
touch semester

echo '#!/bin/sh' > semester
echo "curl --head --silent https://missing.csail.mit.edu" >> semester
```

### Number 2

Use | and > to write the “last modified” date output by semester into a file called last-modified.txt in your home directory
```bash
sh semester | grep -i last-modified > last-modified.txt
```
