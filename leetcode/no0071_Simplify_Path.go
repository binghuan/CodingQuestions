package main

import (
	"fmt"
	"regexp"
	"strings"
)

func simplifyPath(path string) string {

	path = regexp.MustCompile(`//`).ReplaceAllString(path, "/")
	items := strings.Split(path, "/")
	folders := []string{}

	for i := 1; i < len(items); i++ {
		item := items[i]
		if item == "" {
			continue
		}
		if item == ".." {
			if len(folders) > 0 {
				folders = folders[:len(folders)-1]
			}
		} else if item == "." {

		} else {
			folders = append(folders, item)
		}
	}

	path = strings.Join(folders, "/")
	if len(path) > 1 && path[len(path)-1] == '/' {
		path = path[:len(path)-1]
	}
	if len(path) == 0 || path[0] != '/' {
		path = "/" + path
	}

	return path
}

func main() {

	//Input: path = "/home/"
	output := simplifyPath("/home/")
	fmt.Println("OUTPUT:", output)

}
