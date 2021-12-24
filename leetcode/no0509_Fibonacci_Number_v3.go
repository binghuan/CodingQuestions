package main

import "fmt"

func fib(n int) int {

	m := []int{}

	for i := 0; i <= n; i++ {
		if i == 0 {
			m = append(m, 0)
		} else if i == 1 {
			m = append(m, 1)
		} else {
			m = append(m, m[i-1]+m[i-2])
		}
	}
	return m[len(m)-1]
}

func main() {
	// 	Input: n = 2
	// Output: 1
	// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
	n := 10
	fmt.Println("INPUT:", n)
	result := fib(n)
	fmt.Println("OUTPUT:", result)
}
