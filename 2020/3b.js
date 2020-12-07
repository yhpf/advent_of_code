
// Advent of Code, Day 3 part 2 - Toboggan Trajectory
// This was a really ugly solution, but it solved the problem :)

// READ FILE
const fs = require("fs");
let content = fs.readFileSync('3a-input.txt', 'utf8');

// Split textfile into lines
let rows = content.split("\n");
let width = rows[0].length;


// MOVE IN THE MAP - Right 1, down 1

// Add counter for trees
let treeCounter1 = 0;

// Creat a variable for moving sideways on the row
let x = 0;

// Move 1 to the right (with help of x) and 1 down (with help of y)

for (let y = 0; y < rows.length; y++) {
	if (rows[y][x%width] === '#') {
		treeCounter1++;
	}
	x+=1;
}


// MOVE IN THE MAP - Right 3, down 1

// Add counter for trees
let treeCounter2 = 0;

// Set x to 0 again
x = 0;

// Move 3 to the right (with help of x) and 1 down (with help of y)

for (let y = 0; y < rows.length; y++) {
	if (rows[y][x%width] === '#') {
		treeCounter2++;
	}
	x+=3;
}


// MOVE IN THE MAP - Right 5, down 1

// Add counter for trees
let treeCounter3 = 0;

// Set x to 0 again
x = 0;

// Move 5 to the right (with help of x) and 1 down (with help of y)

for (let y = 0; y < rows.length; y++) {
	if (rows[y][x%width] === '#') {
		treeCounter3++;
	}
	x+=5;
}


// MOVE IN THE MAP - Right 7, down 1

// Add counter for trees
let treeCounter4 = 0;

// Set x to 0 again
x = 0;

// Move 7 to the right (with help of x) and 1 down (with help of y)

for (let y = 0; y < rows.length; y++) {
	if (rows[y][x%width] === '#') {
		treeCounter4++;
	}
	x+=7;
}


// MOVE IN THE MAP - Right 1, down 2

// Add counter for trees
let treeCounter5 = 0;

// Set x to 0 again
x = 0;

// Move 1 to the right (with help of x) and 2 down (with help of y)

for (let y = 0; y < rows.length; y += 2) {
	if (rows[y][x%width] === '#') {
		treeCounter5++;
	}
	x++;
}


// Multiplied together all the treeCounters
let answer = treeCounter1 * treeCounter2 * treeCounter3 * treeCounter4 * treeCounter5;

console.log(answer);


