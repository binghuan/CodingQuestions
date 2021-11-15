package main

import "fmt"

func exist(board [][]byte, word string) bool {
	// "1": 49
	// "0": 48

	return false
}

func main() {

	grid := [][]byte{
		{49, 49, 49, 49, 48},
		{49, 49, 48, 49, 48},
		{49, 49, 48, 48, 48},
		{48, 48, 48, 48, 48},
	}

	result := exist(grid, "ABDC")
	fmt.Println("OUTPUT:", result)

}
