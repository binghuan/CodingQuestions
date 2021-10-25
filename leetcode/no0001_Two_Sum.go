package main

import "fmt"

func twoSum(nums []int, target int) []int {

	indexResultMap := make(map[int]int)

	pair4Answer := []int{}

	for index, currentNumber := range nums {
		diff := target - currentNumber

		if indexResultMap[diff] != 0 {
			pair4Answer = append(pair4Answer, index)
			pair4Answer = append(pair4Answer, indexResultMap[diff]-1)
			break
		}
		indexResultMap[currentNumber] = index + 1
	}

	return pair4Answer
}

func main() {
	// Input: nums = [2,7,11,15], target = 9
	// Output: [0,1]
	fmt.Println("INPUT:", []int{2, 7, 11, 15})
	reuslt := twoSum([]int{2, 7, 11, 15}, 9)
	fmt.Println("OUTPUT:", reuslt)
}
