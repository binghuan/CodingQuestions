package main

func isValid(s string) bool {

	checkedChars := []string{}
	result := true

	for i := 0; i < len(s); i++ {
		char := string(s[i])
		if char == "(" || char == "[" || char == "{" {
			checkedChars = append(checkedChars, char)
		} else if char == ")" || char == "]" || char == "}" {

			lastIndex := len(checkedChars) - 1
			if lastIndex < 0 {
				result = false
				break
			}
			lastChar := checkedChars[lastIndex]
			checkedChars = checkedChars[:len(checkedChars)-1]
			if (char == ")" && lastChar != "(") ||
				(char == "]" && lastChar != "[") ||
				(char == "}" && lastChar != "{") {
				result = false
				break
			}
		}
	}

	if len(checkedChars) > 0 {
		result = false
	}
	return result
}

func main() {
	//Input: s = "()"
	isValid("()")

}
