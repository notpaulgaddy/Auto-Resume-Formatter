package main

import (
	"fmt"
	"log"
	"strings"

	"github.com/gocolly/colly"
)

var targetedKeywords = []string{
	"git",
	"javascript",
	"react",
	"angular",
	"data structures",
	"embedded systems",
	"go",
	"rust",
	"C#",
	"C++",
	"C",
	"golang",
	"java",
	"algorithms",
	"database",
	"SQL",
	"object oriented programming",
	"collaboration",
	"documentation",
	"backend",
	"distributed systems",
}

func contains(slice []string, word string) bool {
	for _, item := range slice {
		if strings.EqualFold(item, word) {
			return true
		}
	}
	return false
}

func main() {
	c := colly.NewCollector(
		colly.UserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"),
	)

	// Using a map as a set to store unique found words
	siteFoundWords := make(map[string]struct{})

	c.OnHTML("*", func(e *colly.HTMLElement) {
		words := strings.Fields(e.Text)
		for _, word := range words {
			if contains(targetedKeywords, word) {
				siteFoundWords[strings.ToLower(word)] = struct{}{}
			}
		}
	})

	c.OnRequest(func(r *colly.Request) {
		fmt.Println("Visiting: ", r.URL.String())
	})

	c.OnError(func(r *colly.Response, err error) {
		log.Printf("Error on %s: %v", r.Request.URL, err)
	})

	c.Visit("https://jobs.netflix.com/jobs/305513387")

	c.Wait()

	// Convert the set to a slice for printing or further use
	uniqueWords := make([]string, 0, len(siteFoundWords))
	for word := range siteFoundWords {
		uniqueWords = append(uniqueWords, word)
	}

	fmt.Println("Unique words found in siteFoundWords:", uniqueWords)
}
