# Lesson 1 - Shell tools and scripting

[Class](https://missing.csail.mit.edu/2020/shell-tools/)

## Commands

```bash
foo=bar
echo $foo
echo "The value is $foo"
foo=$(pwd)
echo "We are in $(pwd)"
cat <(ls) <(ls ..)
ls *.sh
ls project?
convert food{txt,md}
touch project{1,2}/src/tests/test{1,2,3}.py
touch {foo,bar}/{a..e}
touch foo/x bar/y
diff <(ls foo) <(ls bar)
find . -name src -type d
find . -path "**/tests/*.py" -type f
find . -mtime -1
grep -R foobar .
history
history | grep touch
```

## Example
```bash
#!/bin/bash

echo "Starting program at $(date)" # Date will be substituted

echo "Running program $0 with $# arguments with pid $$"

for file in "$@"; do
        grep foobar "$file" > /dev/null 2> /dev/null
        # When pattern is not found, grep has exit status 1
        # We redirect STDOUT and STDERR to a null register since we do not care about them
        if [[ "$?" -ne 0 ]]; then
                echo "File $file does not have any foobar, adding one"
                echo "# foobar" >> "$file"
        fi
done
```

## Exercises

### Number 1
List files in the following manner:
- Includes all files, including hidden files: ```ls -a```
- Sizes are listed in human readable format (e.g. 454M instead of 454279954): ```ls -l -s -h```
- Files are ordered by recency: ```ls -l --sort=time```
- Output is colorized: ```ls -l --color=[WHEN]```

### Number 2
Write bash functions marco and polo that do the following. Whenever you execute marco the current working directory should be saved in some manner, then when you execute polo, no matter what directory you are in, polo should cd you back to the directory where you executed marco. For ease of debugging you can write the code in a file marco.sh and (re)load the definitions to your shell by executing source marco.sh.
The solution is in the files marco.sh and polo.sh

### Number 3
Say you have a command that fails rarely. In order to debug it you need to capture its output but it can be time consuming to get a failure run. Write a bash script that runs the following script until it fails and captures its standard output and error streams to files and prints everything at the end. Bonus points if you can also report how many runs it took for the script to fail. Script is in the file failure.sh.
The solution is in the sile run.sh
