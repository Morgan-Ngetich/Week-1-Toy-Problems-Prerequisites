"use strict";
//Import the 'Prompt-sync' library
const prompt = require('prompt-sync')();

// Define the grading function
function grading(marks) {
  if (marks > 79 && marks <= 100) {
    return "A";  // If marks are between 80 and 100, return "A"
  } else if (marks >= 60 && marks <= 79) {
    return "B"; // If marks are between 60 and 79, return "B"
  } else if (marks >= 50 && marks <= 59) {
    return "C"; // If marks are between 50 and 59, return "C"
  } else if (marks >= 40 && marks <= 49) {
    return "D"; // If marks are between 40 and 49, return "D"
  } else if (marks >= 0 && marks <= 39) {
    return "E"; // If marks are between 0 and 39, return "E"
  } else {
    return "Invalid input. Please enter a valid number between 0 and 100.";
  }
}

let marks;
// Validation:
// exit: By typing "exit" or "Quit", the program terminates
while (true) {
  const userInput = prompt('Enter your marks (or type "exit" to quit): ');
  // Checks if the user wants to quit and prints "Goodbye!"
  if (userInput.toLowerCase() === 'exit' || userInput.toLowerCase() === 'quit') {
    console.log('Goodbye!');
    break;
  }

  // Converts the user input (which is a string) to a floating-point number
  marks = parseInt(userInput);

  // Calling the grading function to get the grade
  const grade = grading(marks);
  console.log(`Your grade is ${grade}`);
}
