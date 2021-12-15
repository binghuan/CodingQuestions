package main

import "fmt"

func minOperations(logs []string) int {
	level := 0

	for _, log := range logs {
		switch log {
		case "./":
			level = level
		case "../":
			level -= 1
			if level < 0 {
				level = 0
			}
		default:
			level += 1
		}
	}

	return level
}

func main() {

	logs := []string{"d1/", "d2/", "./", "d3/", "../", "d31/"}
	result := minOperations(logs)
	fmt.Println("OUTPUT:", result)
}
