package main

import "fmt"

func fizzBuzz(n int) []string {
	result := []string{}
	for i := 1; i <= n; i++ {
		if i%3 == 0 && i%5 == 0 {
			result = append(result, "FizzBuzz")
		} else if i%5 == 0 {
			result = append(result, "Buzz")
		} else if i%3 == 0 {
			result = append(result, "Fizz")
		} else {
			result = append(result, fmt.Sprintf("%d", i))
		}
	}
	return result
}

func main() {
	fmt.Println("INPUT:", 3)
	result := fizzBuzz(3)
	fmt.Println("OUTPUT:", result)
}
