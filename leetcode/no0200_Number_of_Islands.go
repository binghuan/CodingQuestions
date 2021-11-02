package main

import "fmt"

func numIslands(grid [][]byte) int {

	// "1": 49
	// "0": 48

	var dfs func(grid [][]byte, x int, y int, w int, h int)
	dfs = func(grid [][]byte, x int, y int, w int, h int) {
		if x < 0 || y < 0 || x >= w || y >= h || grid[x][y] == 48 {
			return
		}
		grid[x][y] = 48
		dfs(grid, x-1, y, w, h)
		dfs(grid, x+1, y, w, h)
		dfs(grid, x, y-1, w, h)
		dfs(grid, x, y+1, w, h)
	}

	width := len(grid)
	height := len(grid[0])

	numberOfIslands := 0

	for x := range grid {

		for y := range grid[x] {
			if grid[x][y] == 49 {
				numberOfIslands += 1
			}

			dfs(grid, x, y, width, height)
		}
	}

	return numberOfIslands
}

func main() {

	grid := [][]byte{
		{49, 49, 49, 49, 48},
		{49, 49, 48, 49, 48},
		{49, 49, 48, 48, 48},
		{48, 48, 48, 48, 48},
	}

	result := numIslands(grid)
	fmt.Println("OUTPUT:", result)
}
