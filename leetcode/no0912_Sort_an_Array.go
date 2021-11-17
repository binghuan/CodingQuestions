package main

import "fmt"

var DBG = false

func sortArray(nums []int) []int {
	quickSort(nums, 0, len(nums)-1)
	return nums
}

func swap(array []int, left int, right int) {
	if left == right {
		return
	}
	if DBG {
		fmt.Println("+++ swap +++", array, left, right)
	}
	temp := array[left]
	array[left] = array[right]
	array[right] = temp
	if DBG {
		fmt.Println("--- swap ---", array, left, right)
	}
}

func partition(array []int, left int, right int, pivot int) int {
	if DBG {
		fmt.Println("+++ partition +++", array, "left [", left, "] right [", right, "], pivot=", pivot)
	}
	for left <= right {
		for array[left] < pivot {
			left++
		}
		for array[right] > pivot {
			right--
		}
		if left <= right {
			swap(array, left, right)
			left++
			right--
		}
	}
	if DBG {
		fmt.Println("--- partition ---", array, "left [", left, "] right [", right, "], pivot=", pivot)
	}
	return left
}

func quickSort(array []int, left int, right int) {
	if DBG {
		fmt.Println("+++ quickSort +++", array, "left [", left, "]=", array[left], ", right [", right, "]=", array[right])
	}
	if left >= right {
		return
	}

	pivotIndex := (left + right) / 2
	pivot := array[pivotIndex]
	if DBG {
		fmt.Println("pivot [", pivotIndex, "]=", pivot)
	}

	index := partition(array, left, right, pivot)
	if DBG {
		fmt.Println("index =>", index)
		fmt.Println("Sort part 1:", "left [", left, "]=", array[left], ", right [", index-1, "]=", array[index-1])
		fmt.Println("Sort part 2:", "left [", index, "]=", array[index], ", right [", right, "]=", array[right])
	}
	quickSort(array, left, index-1)
	quickSort(array, index, right)
}

func main() {
	array := []int{5, 2, 3, 1}
	fmt.Println("INPUT:", array, 0, len(array)-1)
	// /quickSort(array, 0, len(array)-1)
	sortArray(array)
	fmt.Println("OUTPUT:", array)
}
