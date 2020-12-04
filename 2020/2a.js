
// Advent of Code, Day 2 part 1 - How many passwords are correct? 

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

	// How many times can we find key letter in password
	let numAppear = uppdelatOrd[2].split(keyLetter).length - 1;

	// Check if the number of apperence of the letter is within the span om min and max, and add to counter if password ok
	if (numAppear >= minimum && numAppear <= maximum) {
		counter++;
	}
}

// SHOW COUNTER
console.log(counter);




