package main

import "fmt"

func pivotIndex(nums []int) int {

	sum := 0
	for _, num := range nums {
		sum += num
	}

	fmt.Println("Total SUM:", sum)

	sumOnTheLeft := 0
	for index, num := range nums {
		if index > 0 {
			sumOnTheLeft += nums[index-1]
		}
		sumOnTheRight := sum - sumOnTheLeft - num

		fmt.Println("check num:", num, "index:", index, "left:", sumOnTheLeft, "right:", sumOnTheRight)

		if sumOnTheLeft == sumOnTheRight {
			return index
		}
	}

	return -1
}

func main() {
	//input := []int{1, 7, 3, 6, 5, 6}
	input := []int{2, 1, -1}

	fmt.Println("INPUT:", input)
	result := pivotIndex(input)
	fmt.Println("OUTPUT:", result)
}
