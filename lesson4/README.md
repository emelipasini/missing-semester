# Lesson 4 - Data Wrangling

[Class](https://missing.csail.mit.edu/2020/data-wrangling/)

## Commands

```bash
sed 's/string/replace/'
sed 's/[ab]//'
sed 's/[ab]//g'
sed 's/(ab)*//'
sed -E 's/(ab|cb)*//g'
sed -E 's/^.*Disconnected from (invalid | authenticating)?user (.*) [0-9.]+ port [0-9]+ (\[preauth\])?$/\2/'
wc -l
sort
uniq -c
sort -nk1,1
tail -n10
awk '{print $0}'
paste -sd,
awk '$1 == 1 && $2 ~ /^c.*e$/ {print $0}'
awk 'BEGIN {rows = 0} $1 == 1 && $2 ~ /^c.*e$/ {print $0} '{rows += 1} END {print rows}'
sed -E 's/^.*Disconnected from.../\2/' | sort | uniq -c | awk '$1 != 1 {print $1} | paste -sd+ | bc -l
echo '1+4' | bc -l
```

## Exercises

### Number 1

[Regex tutorial](https://regexone.com/)

