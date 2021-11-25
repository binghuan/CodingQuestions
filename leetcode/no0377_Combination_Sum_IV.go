package main

import "fmt"

func combinationSum4(nums []int, target int) int {

	pathsToTargetSum := make([]int, target+1)
	pathsToTargetSum[0] = 1

	for value := 1; value <= target; value++ {
		for _, num := range nums {
			diff := value - num
			if diff >= 0 {
				pathsToTargetSum[value] += pathsToTargetSum[diff]
			}
		}
	}
	return pathsToTargetSum[target]
}

func main() {
	input := []int{1, 2, 3}
	target := 4
	result := combinationSum4(input, target)
	fmt.Println("OUTPUT:", result)
}
