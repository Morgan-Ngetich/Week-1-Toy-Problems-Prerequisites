"use strict"; // Enable strict mode for enhanced error checking

//Import the 'Prompt-sync' library

const prompt = require('prompt-sync')();

//Define the speedDetector function
function speedDetector() {
   // Checks if speed is a Number or is less than 0
  if (isNaN(speed) || speed < 0) {
    console.log('Invalid input. Please enter a valid number!!! Should be greater than 0');
  } else if (speed < 70) {   // If speed is less than 70, it dislpays "Ok."
    console.log('Ok.');
  } else {
    const aboveLimit = speed - 70;   // if speed is above limit it gets the above limit through subtraction.
    const demeritPoints = Math.ceil(aboveLimit / 5);  // Divides the aboveLimit and Rounds up the number to the nearest integer
    console.log(`Demerit points: ${demeritPoints}`);
    if (demeritPoints > 12) {
      console.log('License suspended!!!')
    }
  }
  
} 

let speed ;   //Declaring a variable the userInput will be assigned to (line: 36)

//Exit: By typing "exit" or "Quit",the program terminates
while (true) {
  const userInput = prompt("Enter the speed of the car: (type 'exit' to quit) ");
// Checks if the user wants to quit and prints "Goodbye!"
  if (userInput.toLowerCase() === 'exit' ) {
    console.log('Goodbye!');
    break;
  }
  
  speed =  parseFloat(userInput);  // converts the speed from a string to a number
  speedDetector();   // Calling speedDector function

}




