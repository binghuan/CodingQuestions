package main

/**
 * Forward declaration of isBadVersion API.
 * @param   version   your guess about first bad version
 * @return 	 	      true if current version is bad
 *			          false if current version is good
 * func isBadVersion(version int) bool;
 */

func firstBadVersion(n int) int {

	left := 1
	right := n

	for left < right { // til right <= left

		var mid = left + (right-left)/2
		if isBadVersion(mid) == true { // if true , move right pointer to left.
			right = mid
		} else { // if false, move left pointer to right.
			left = mid + 1
		}
	}

	return left
}

func main() {
	firstBadVersion(5)
}

func isBadVersion(value int) bool {
	if value < 4 {
		return true
	} else {
		return false
	}
}
