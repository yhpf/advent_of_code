
// Advent of Code, Day 3 part 1 - Toboggan Trajectory

// READ FILE
const fs = require("fs");
let content = fs.readFileSync('3a-input.txt', 'utf8');

// MOVE IN THE MAP

// Add counter for trees
let treeCounter = 0;

// Creat a variable for moving sideways on the row
let x = 0;

// Split textfile into lines
let rows = content.split("\n");
let width = rows[0].length;

// Move 3 to the right (with help of x) and 1 down (with help of y)

for (let y = 0; y < rows.length; y++) {
	if (rows[y][x%width] === '#') {
		treeCounter++;
	}
	x+=3;
}

console.log(treeCounter);