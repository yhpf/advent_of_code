// Advent of Code, Day 4 part 1 - Passport Processing

// READ FILE
const fs = require("fs");
let content = fs.readFileSync('4a-input.txt', 'utf8');

// Split textfile into lines
let documents = content.split("\n\n");

// See how many inputs have all 8 fields
let counter1 = 0;

for (let i = 0; i < documents.length; i++) {
	if (documents[i].match(/:/g).length === 8) {
		counter1++;
	}
}

console.log(counter1);

// See how many inputs have all 7 fields and how many of them that are missing 'cid'
let counter2 = 0;

for (let i = 0; i < documents.length; i++) {
	if (documents[i].match(/:/g).length === 7 && documents[i].match(/cid/g) == null) {
		counter2++;
	}
}

console.log(counter2);

// Add inputs have all 8 fields together with inputs with 7 field that are missing 'cid'
console.log(counter1 + counter2);



