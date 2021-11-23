package main

import "fmt"

func climbStairs(n int) int {

	stepHistory := map[int]int{}

	var doClimb func(steps int) int

	doClimb = func(steps int) int {

		if steps == 1 {
			return 1
		}

		if steps == 2 {
			return 2
		}

		if steps <= 0 {
			return 0
		}

		_, isExisted := stepHistory[steps]
		if isExisted {
			return stepHistory[steps]
		}

		total := doClimb(steps-1) + doClimb(steps-2)
		stepHistory[steps] = total
		return total
	}

	return doClimb(n)
}

func main() {

	input := 2
	fmt.Println("INPUT:", input)
	result := climbStairs(input)
	fmt.Println("OUTPUT:", result)
}
