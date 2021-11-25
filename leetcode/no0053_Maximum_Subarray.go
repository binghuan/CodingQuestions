package main

import (
	"fmt"
	"sort"
)

func maxSubArray(nums []int) int {

	maxSumHistory := make([]int, len(nums))
	maxSumHistory[0] = nums[0]

	var getMax func(numA int, numB int) int
	getMax = func(numA int, numB int) int {

		if numA > numB {
			return numA
		} else {
			return numB
		}
	}

	for index, num := range nums {
		if index == 0 {
			continue
		}
		//fmt.Println("index:", index, "num:", num)
		maxValueOnThisRound := getMax(maxSumHistory[index-1]+num, num)
		maxSumHistory[index] = maxValueOnThisRound
	}

	sort.SliceStable(maxSumHistory, func(i, j int) bool {
		return maxSumHistory[i] > maxSumHistory[j]
	})

	return maxSumHistory[0]
}

func main() {

	input := []int{-2, 1, -3, 4, -1, 2, 1, -5, 4}
	fmt.Println("INPUT:", input)
	output := maxSubArray(input)
	fmt.Println("OUTPUT:", output)
}
