package main

import (
	"fmt"
	"sort"
)

func heightChecker(heights []int) int {

	numsByIndex := make([]int, len(heights))
	copy(numsByIndex, heights)

	sort.SliceStable(heights, func(i, j int) bool {
		return heights[i] < heights[j]
	})
	fmt.Println("INPUT:", numsByIndex)
	fmt.Println("SORT :", heights)

	count := 0
	for index, numForIndex := range numsByIndex {

		if numForIndex == heights[index] {
			count += 1
		}
	}

	return len(heights) - count
}

func main() {
	input := []int{1, 1, 4, 2, 1, 3}
	result := heightChecker(input)
	fmt.Println("OUTPUT:", result)
}
