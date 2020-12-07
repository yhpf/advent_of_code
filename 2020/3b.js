
// Advent of Code, Day 3 part 2 - Toboggan Trajectory

// READ FILE
const fs = require("fs");
let content = fs.readFileSync('3a-input.txt', 'utf8');

// Split textfile into lines
let rows = content.split("\n");

// Define the width of the content row
let width = rows[0].length;


// Make a function 
function moveAround(dx, dy) {
	// Add counter for trees
	let treeCounter = 0;

	// Creat a variable for moving sideways on the row
	let x = 0;

	// For loop, Move dx to the right and dy down, add to counter if #
	for (let y = 0; y < rows.length; y+=dy) {
		if (rows[y][x%width] === '#') {
			treeCounter++;
		}
		x+=dx;
	}
	return treeCounter;
}

// Call function,  multiplie results  and log 
console.log(moveAround(1,1) * moveAround(3,1) * moveAround(5,1) * moveAround(7,1) * moveAround(1,2));


