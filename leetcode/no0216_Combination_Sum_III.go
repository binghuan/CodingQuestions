package main

import "fmt"

func combinationSum3(k int, n int) [][]int {

	candidates := []int{1, 2, 3, 4, 5, 6, 7, 8, 9}

	var backtrack func(
		candidates []int,
		comb []int,
		currSum int,
		targetSum int,
		startedIndex int,
		ans [][]int,
	) [][]int
	backtrack = func(
		candidates []int,
		comb []int,
		currSum int,
		targetSum int,
		startedIndex int,
		ans [][]int,
	) [][]int {
		if currSum == targetSum && len(comb) == k {
			clone := make([]int, len(comb))
			copy(clone, comb)

			ans = append(ans, clone)
			return ans
		}

		if currSum > targetSum {
			return ans
		}

		for i := startedIndex; i < len(candidates); i++ {

			num := candidates[i]
			if num > targetSum {
				continue
			}
			comb = append(comb, num)
			ans = backtrack(
				candidates,
				comb,
				currSum+num,
				targetSum,
				i+1,
				ans,
			)
			comb = comb[:len(comb)-1]
		}

		return ans
	}

	answer := [][]int{}
	curr := []int{}

	answer = backtrack(
		candidates,
		curr,
		0,
		n,
		0,
		answer,
	)

	return answer
}

func main() {

	k := 3
	n := 7
	result := combinationSum3(k, n)
	fmt.Println("OUTPUT:", result)

}
