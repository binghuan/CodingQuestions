package main

import (
	"fmt"
	"sort"
	"strings"
	"unicode"
)

/*
 20250922
 Coding quest from Singpass
*/

type Book struct {
	pages []string
	// Inverted index: word -> sorted unique page numbers (1-based)
	index map[string][]int
}

func NewBook() *Book {
	return &Book{
		pages: make([]string, 0),
		index: make(map[string][]int),
	}
}

// AddPage: Add a page and update index immediately
func (b *Book) AddPage(pageContent string) {
	b.pages = append(b.pages, pageContent)
	pageNo := len(b.pages) // 1-based

	// Words that appeared on this page, record page number only once
	seenInThisPage := make(map[string]bool)
	for _, w := range tokenize(pageContent) {
		if seenInThisPage[w] {
			continue
		}
		seenInThisPage[w] = true
		b.index[w] = insertSortedUnique(b.index[w], pageNo)
	}
}

// GetPage: 1-based page number; returns (content, ok)
func (b *Book) GetPage(pageNo int) (string, bool) {
	if pageNo <= 0 || pageNo > len(b.pages) {
		return "", false
	}
	return b.pages[pageNo-1], true
}

// FindPagesFor: Case insensitive; returns empty slice if not found
func (b *Book) FindPagesFor(word string) []int {
	w := strings.ToLower(word)
	if pages, ok := b.index[w]; ok {
		// Return a copy to avoid external modification of internal slice
		out := make([]int, len(pages))
		copy(out, pages)
		return out
	}
	return []int{}
}

// ---- helpers ----

// tokenize: Split string into tokens containing only letters or digits, convert to lowercase
func tokenize(s string) []string {
	tokens := []string{}
	var sb strings.Builder
	flush := func() {
		if sb.Len() > 0 {
			tokens = append(tokens, strings.ToLower(sb.String()))
			sb.Reset()
		}
	}
	for _, r := range s {
		if unicode.IsLetter(r) || unicode.IsDigit(r) {
			sb.WriteRune(r)
		} else {
			flush()
		}
	}
	flush()
	return tokens
}

// Insert pageNo into a sorted and unique integer slice
func insertSortedUnique(a []int, v int) []int {
	i := sort.SearchInts(a, v)
	if i < len(a) && a[i] == v {
		return a // Already exists
	}
	// Insert v
	a = append(a, 0)
	copy(a[i+1:], a[i:])
	a[i] = v
	return a
}

// ---- demo ----
func main() {
	book := NewBook()
	book.AddPage("The quick brown fox")
	book.AddPage("The lazy dog")
	book.AddPage("The quick brown fox jumps over the lazy dog")

	if p, ok := book.GetPage(2); ok {
		fmt.Println("getPage(2):", p) // The lazy dog
	}

	fmt.Println(`findPagesFor("the"):`, book.FindPagesFor("the"))           // [1 2 3]
	fmt.Println(`findPagesFor("brown"):`, book.FindPagesFor("brown"))       // [1 3]
	fmt.Println(`findPagesFor("squirrel"):`, book.FindPagesFor("squirrel")) // []
}
