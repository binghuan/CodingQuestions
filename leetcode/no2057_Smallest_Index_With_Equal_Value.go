package main

import "fmt"

func smallestEqual(nums []int) int {

	for i := 0; i < len(nums); i++ {
		if nums[i] == i%10 {
			return i
		}
	}

	return -1
}

func main() {
	nums := []int{0, 1, 2}
	result := smallestEqual(nums)
	fmt.Println("OUTPUT:", result)
}
