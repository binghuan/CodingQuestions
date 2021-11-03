package main

import "fmt"

func numIdenticalPairs(nums []int) int {

	counter := 0

	for i, numA := range nums {

		for j, numB := range nums {

			if j > i {
				if numA == numB {
					counter += 1
				}
			}
		}
	}

	return counter
}

func main() {
	nums := []int{1, 2, 3, 1, 1, 3}
	ans := numIdenticalPairs(nums)
	fmt.Println("OUTPUT:", ans)
}
