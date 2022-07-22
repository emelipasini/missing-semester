#!/usr/bin

run() {
	i=0
	while [ "$(source ./failure.sh)" == "Everything went according to plan" ]
	do
		((i++))
	done
	echo "Iterations: $i"
}
