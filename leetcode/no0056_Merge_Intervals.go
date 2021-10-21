package main

import (
	"fmt"
	"sort"
)

func merge(intervals [][]int) [][]int {

	fmt.Println("INPUT:", intervals)

	sort.SliceStable(intervals, func(i, j int) bool {

		fmt.Println(intervals[i], intervals[j])
		if intervals[i][0] == intervals[j][0] {
			return intervals[i][1] < intervals[j][1]
		} else {
			return intervals[i][0] < intervals[j][0]
		}

	})

	result := [][]int{}
	lastInterval := []int{}
	isFirst := true
	for _, interval := range intervals {
		if isFirst {
			lastInterval = interval
			isFirst = false
		} else {
			if interval[0] >= lastInterval[0] &&
				interval[0] <= lastInterval[1] {
				if interval[1] > lastInterval[1] {
					lastInterval[1] = interval[1]
				}
			} else {
				//result.push(lastInterval.slice())
				result = append(result, lastInterval)
				lastInterval = interval
			}
		}
	}
	result = append(result, lastInterval)

	fmt.Println("OUTPUT:", result)
	return result
}

func main() {

	// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
	// Output: [[1,6],[8,10],[15,18]]

	input := [][]int{
		{1, 3},
		{1, 5},
		{2, 6},
		{8, 10},
		{15, 18},
	}
	merge(input)

}
