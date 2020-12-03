
// Advent of Code, Day 2 part 1 - How many passwords are correct? 

// Read file

const fs = require("fs");

let content = fs.readFileSync('2b-input.txt', 'utf8');


// FIND KEY LETTER //

// Split on new line
let uppdelatRad = content.split("\n");

// Split on white space
let uppdelatOrd = uppdelatRad[0].split(" ")

// Remove kolon from letter 
let keyLetter = uppdelatOrd[1][0];


// FIND MIN AND MAX NUMBER OF TIMES KEY CAN APPEAR

// Seperate min and max from each other
let sepMinMax = uppdelatOrd[0].split("-")

// Set min and max

let minimum = sepMinMax[0]
let maximum = sepMinMax[1]


// EVALUATE IF THE PASSWORD IS CORRECT 

// How many times can we find key letter in password
let numAppear = uppdelatOrd[2].split(keyLetter).length - 1

// Check if the number of apperence of the letter is within the span om min and max
if (numAppear >= minimum && numAppear <= maximum) {
	console.log('Password OK')
} else {
	console.log('Not valid password')
}

// need to make a function and loop and also count OK passwords instead of writing it out

