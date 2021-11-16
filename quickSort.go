package main

import "fmt"

func swap(array []int, left int, right int) {
	if left == right {
		return
	}
	fmt.Println("+++ swap +++", array, left, right)
	temp := array[left]
	array[left] = array[right]
	array[right] = temp
	fmt.Println("--- swap ---", array, left, right)
}

func partition(array []int, left int, right int, pivot int) int {
	fmt.Println("+++ partition +++", array, "left [", left, "] right [", right, "], pivot=", pivot)
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
	fmt.Println("--- partition ---", array, "left [", left, "] right [", right, "], pivot=", pivot)
	return left
}

func quickSort(array []int, left int, right int) {
	fmt.Println("+++ quickSort +++", array, "left [", left, "]=", array[left], ", right [", right, "]=", array[right])
	if left >= right {
		return
	}

	pivotIndex := (right - left) / 2
	pivot := array[pivotIndex]
	fmt.Println("pivot [", pivotIndex, "]=", pivot)

	index := partition(array, left, right, pivot)
	fmt.Println("index =>", index)

	fmt.Println("Sort part 1:", "left [", left, "]=", array[left], ", right [", index-1, "]=", array[index-1])
	fmt.Println("Sort part 2:", "left [", index, "]=", array[index], ", right [", right, "]=", array[right])
	quickSort(array, left, index-1)
	quickSort(array, index, right)
}

func main() {
	array := []int{5, 2, 3, 1}
	fmt.Println("INPUT:", array, 0, len(array)-1)
	quickSort(array, 0, len(array)-1)
	fmt.Println("OUTPUT:", array)
}
