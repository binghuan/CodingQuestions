package main

import (
	"fmt"
	"strconv"
)

func calculate(s string) int {

	DBG := false
	if DBG {
		fmt.Println("INPUT", s)
	}
	stack := []int{}
	currentNumber := 0
	currentChar := ""
	operation := "+"
	size := len(s)
	for i := 0; i < size; i++ {
		currentChar = string(s[i])
		if DBG {
			fmt.Println("--- #", i, "Check:", currentChar, "currentNumber=", currentNumber, "stack=", stack)
		}
		isNumber := false
		if number, err := strconv.Atoi(currentChar); err == nil {
			if DBG {
				fmt.Printf("%q looks like a number.\n", currentChar)
			}
			currentNumber = (currentNumber * 10) + number
			isNumber = true
		}

		if (!isNumber && currentChar != " ") || i == size-1 {
			switch operation {
			case "+":
				stack = append(stack, currentNumber)
			case "-":
				stack = append(stack, -currentNumber)
			case "*":
				last := stack[len(stack)-1]
				if DBG {
					fmt.Println("last =", last)
				}
				stack = stack[:len(stack)-1]
				stack = append(stack, last*currentNumber)
			case "/":
				last := stack[len(stack)-1]
				if DBG {
					fmt.Println("last =", last)
				}
				stack = stack[:len(stack)-1]
				stack = append(stack, last/currentNumber)
			}

			operation = currentChar
			currentNumber = 0
		}
	}

	result := 0
	for len(stack) > 0 {
		last := stack[len(stack)-1]
		stack = stack[:len(stack)-1]
		result += last
	}

	if DBG {
		fmt.Println("OUTPUT:", result)
	}
	return result
}

func main() {
	calculate("3+2*2")
	//calculate(" 3/2 ")
}
