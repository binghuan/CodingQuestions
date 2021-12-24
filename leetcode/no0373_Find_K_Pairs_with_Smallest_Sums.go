package main

import (
	"fmt"
	"sort"
)

func kSmallestPairs(nums1 []int, nums2 []int, k int) [][]int {

	candidates := [][]int{}
	lengthA := k
	maxIndexOfNums1 := len(nums1) - 1
	if len(nums1) < k {
		lengthA = len(nums1)
	}
	lengthB := k
	maxIndexOfNums2 := len(nums2) - 1
	if len(nums2) < k {
		lengthB = len(nums2)
	}

	for i := 0; i < lengthA; i++ {
		if i > maxIndexOfNums1 {
			break
		}
		numA := nums1[i]
		for j := 0; j < lengthB; j++ {
			if j > maxIndexOfNums2 {
				break
			}
			numB := nums2[j]
			candidates = append(candidates, []int{numA, numB})
		}
	}

	sort.SliceStable(candidates, func(a, b int) bool {
		return (candidates[a][0] + candidates[a][1]) < (candidates[b][0] + candidates[b][1])
	})

	if len(candidates) < k {
		k = len(candidates)
	}
	candidates = candidates[:k]

	return candidates
}

func main() {
	// Input: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
	// Output: [[1,2],[1,4],[1,6]]
	// Explanation: The first 3 pairs are returned from the sequence: [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
	nums1 := []int{1, 7, 11}
	nums2 := []int{2, 4, 6}
	k := 3
	fmt.Println("INPUT: nums1=", nums1, "nums2=", nums2, "k=", k)
	output := kSmallestPairs(nums1, nums2, 3)
	fmt.Println("OUTPUT:", output)
}
