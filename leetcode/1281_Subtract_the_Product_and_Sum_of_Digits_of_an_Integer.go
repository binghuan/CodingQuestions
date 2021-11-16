package main

import (
	"fmt"
	"strconv"
	"strings"
)

func subtractProductAndSum(n int) int {
	nums := strings.Split(strconv.Itoa(n), "")
	product := 1
	sum := 0
	for _, value := range nums {
		num, _ := strconv.Atoi(value)
		product *= num
		sum += num
	}

	result := product - sum
	fmt.Println("OUTPUT:", result)
	return result
}

func main() {
	subtractProductAndSum(234) // Expected: 15
}
