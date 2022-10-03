# Lesson 5 - Command-line environment

[Class](https://missing.csail.mit.edu/2020/command-line/)

## Signals

man signal

```
Ctrl + c //SIGINT
Ctrl + \ //SIGQUIT
Ctrl + z //SIGSTOP
```

## Commands

```bash
sleep 1000
nohup sleep 2000 &
jobs
bg %1
kill -STOP %1
kill -HUP %1
```

## Python code with signals

```python
#!/usr/bin/env python

import signal, time

def handler(signum, time):
    print("\n I got a SIGINT, but I'm not stopping")

signal.signal(signal.SIGINT, handler)
i = 0
while True:
    time.sleep(.1)
    print("\r{}".format(i), end = "")
    i += 1
```

## Tmux

```
tmux
tmux new -t foobar
tmux ls
Ctrl + d
Ctrl + a c
Ctrl + a p
Ctrl + a n
Ctrl + a 1
Ctrl + a ,
Ctrl + a "
Ctrl + a %
Ctrl + a Arrow Key
Ctrl + a " "
Ctrl + a z
```

## Terminal config

```
alias ll="ls -lah"
PS1="> "
PS1="\w > "
```

## Exercises

[Dotfiles](https://github.com/emelipasini/dotfiles)

