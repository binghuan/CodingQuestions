package main

import (
	"fmt"
	"sort"
	"strings"
)

func combinationSum(candidates []int, target int) [][]int {

	DBG := false

	sort.SliceStable(candidates, func(i, j int) bool {
		return candidates[i] < candidates[j]
	})

	if DBG {
		fmt.Println("INPUT:", candidates, target)
	}

	var dfs func(candidates []int, startedIndex int, remaining int, currCombination []int, answer [][]int) [][]int
	dfs = func(candidates []int, startedIndex int, remaining int, currCombination []int, answer [][]int) [][]int {
		if remaining == 0 {

			clone := make([]int, len(currCombination))

			copy(clone, currCombination)

			sort.SliceStable(clone, func(i, j int) bool {
				return clone[i] < clone[j]
			})
			curr := strings.Trim(strings.Join(strings.Fields(fmt.Sprint(clone)), ","), "[]")
			for _, combination := range answer {
				output := strings.Trim(strings.Join(strings.Fields(fmt.Sprint(combination)), ","), "[]")
				if curr == output {
					return answer
				}
			}

			if DBG {
				fmt.Println("!!PUSH:", currCombination)
			}

			answer = append(answer, clone)

			if DBG {
				fmt.Println("answer=", answer)
			}
			return answer
		} else if remaining < 0 {
			return answer
		}

		for index, num := range candidates {

			if num > target {
				break
			}

			currCombination = append(currCombination, num)
			if DBG {
				fmt.Println("Try ", currCombination, "remaining: ", remaining-num)
			}
			answer = dfs(candidates, index, remaining-num, currCombination, answer)
			currCombination = currCombination[:len(currCombination)-1]
		}

		return answer
	}

	curr := []int{}
	ans := dfs(candidates, 0, target, curr, [][]int{})

	if DBG {
		fmt.Println("OUTPUT:", len(ans), ans)
	}
	return ans
}

func main() {

	/*
	   Input: candidates = [2,3,6,7], target = 7
	   Output: [[2,2,3],[7]]
	*/
	// combinationSum([]int{2, 3, 6, 7}, 7)

	combinationSum([]int{2, 7, 6, 3, 5, 1}, 9)

	// candidates := []int{2, 3, 6, 7}
	// for index, value := range candidates {
	// 	fmt.Println("index:", index, "value:", value)
	// }
}
