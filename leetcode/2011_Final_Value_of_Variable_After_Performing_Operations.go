package main

import (
	"fmt"
	"strings"
)

func finalValueAfterOperations(operations []string) int {

	fmt.Println("INPUT:", operations)

	x := 0

	for _, opertion := range operations {

		if strings.Contains(opertion, "++") {
			x += 1
		} else if strings.Contains(opertion, "--") {
			x -= 1
		}
	}

	fmt.Println("OUTPUT:", x)
	return x
}

func main() {
	finalValueAfterOperations([]string{"--X", "X++", "X++"})
}
