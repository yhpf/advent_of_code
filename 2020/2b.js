// Advent of Code, Day 2 part 2 - How many passwords are correct? 

// READ FILE
const fs = require("fs");
let content = fs.readFileSync('2a-input.txt', 'utf8');


// FIND KEY LETTER //

// Split on new line
let uppdelatRad = content.split("\n");

// Add counter
let counter = 0;

// Iterate over every row with slitted values in the text file
for (let i = 0; i < uppdelatRad.length; i++) {  

	// Split on white space
	let uppdelatOrd = uppdelatRad[i].split(" ");

	// Remove kolon from letter 
	let keyLetter = uppdelatOrd[1][0];


	// FIND MIN AND MAX NUMBER OF TIMES KEY CAN APPEAR

	// Seperate min and max from each other
	let sepMinMax = uppdelatOrd[0].split("-");

	// Set min and max
	let minimum = sepMinMax[0];
	let maximum = sepMinMax[1];


	// EVALUATE IF THE PASSWORD IS CORRECT 

	// Check if the min or max position is the key letter (remeber that min and max uses 1-index and JS 0-index), and add to counter if password ok
	if ((keyLetter == uppdelatOrd[2][minimum-1] && keyLetter !== uppdelatOrd[2][maximum-1]) || (keyLetter == uppdelatOrd[2][maximum-1] && keyLetter !== uppdelatOrd[2][minimum-1])) {
		counter++;
	}
}

// SHOW COUNTER
console.log(counter);