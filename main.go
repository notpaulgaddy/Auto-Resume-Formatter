package main

import (
	"fmt"
	"log"

	"baliance.com/gooxml/document"
)

func main() {
	targetedKeywords := []string{
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
	}
	docxPath := "paulGaddySWEresume.docx"
	doc, err := document.Open(docxPath)
	if err != nil {
		log.Fatalf("error opening document: %s", err)
	}

	var text string
	for _, para := range doc.Paragraphs() {
		for _, run := range para.Runs() {
			text += run.Text()
		}
	}

	fmt.Println(text)
}
