package main

import "fmt"

func fib(n int) int {

	if n <= 0 {
		return 0
	} else if n == 1 {
		return 1
	}

	return fib(n-1) + fib(n-2)
}

func main() {
	// 	Input: n = 2
	// Output: 1
	// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
	n := 2
	fmt.Println("INPUT:", n)
	result := fib(n)
	fmt.Println("OUTPUT:", result)
	n = 10
	fmt.Println("INPUT:", n)
	result = fib(n)
	fmt.Println("OUTPUT:", result)
}
