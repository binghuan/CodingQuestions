package main

import "fmt"

func lengthOfLongestSubstring(s string) int {

	var max func(a int, b int) int
	max = func(a int, b int) int {
		if a > b {
			return a
		} else {
			return b
		}
	}

	maxLength := 0
	startIndex := 0
	charMapping := make(map[byte]int)
	for i := 0; i < len(s); i++ {
		char := s[i]
		_, isExisted := charMapping[char]
		if isExisted == false {
			charMapping[char] = -1
		}

		startIndex = max(startIndex, charMapping[char]+1)
		maxLength = max(maxLength, i-startIndex+1)

		charMapping[char] = i
	}

	return maxLength
}

func main() {
	// Input: s = "abcabcbb"
	// Output: 3
	// Explanation: The answer is "abc", with the length of 3.

	s := "abcabcbb"
	fmt.Println("INPUT:", s)
	result := lengthOfLongestSubstring(s)
	fmt.Println("OUTPUT:", result)
}
