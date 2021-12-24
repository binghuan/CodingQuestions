package main

import "fmt"

func fib(n int) int {

	m := make(map[int]*int)

	var recursion func(num int) int
	recursion = func(num int) int {
		if num <= 0 {
			return 0
		} else if num == 1 {
			return 1
		}

		if m[num] != nil {
			return *m[num]
		}

		sum := recursion(num-1) + recursion(num-2)
		sumInHistory := int(sum)
		m[num] = &sumInHistory
		return sum
	}
	return recursion(n)
}

func main() {
	// 	Input: n = 2
	// Output: 1
	// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
	n := 2
	fmt.Println("INPUT:", n)
	result := fib(n)
	fmt.Println("OUTPUT:", result)
}
