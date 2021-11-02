package main

import "fmt"

func numberOfSteps(num int) int {

	steps := 0
	for num > 0 {
		if num%2 == 0 {
			num = num / 2
		} else {
			num = num - 1
		}
		steps += 1
	}
	return steps
}

func main() {
	fmt.Println("INPUT:", 14)
	result := numberOfSteps(14)
	fmt.Println("OUTPUT:", result)
}
