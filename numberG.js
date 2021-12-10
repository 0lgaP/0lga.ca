let prompt = require("prompt-sync")();

// code below (replace this example)
let number = Math.floor(Math.random() * 10);
let answer = prompt("Guess a number: ");
let chances = 10;


//is number correct loop
function checkNumber(num) {
  
  for (let i = 0; i < chances; i++) {
    if (num < number) {
      chances -= 1
      console.log("The number I am thinking of is higher than " + answer)
      console.log("you have " + chances + " chances remaining")
      answer = prompt("Guess a number: ");
    } else if (num > number) {
      chances -= 1
      console.log("The number I am thinking of is lower than " + answer)
      console.log("you have " + chances + " chances remaining")
      answer = prompt("Guess a number: ");
    } else if (typeof num === NaN) {
      console.log("I'm not sure this is a number, please enter a number form 1 to 100")
      console.log("you have " + chances + " chances remaining")
      answer = prompt("Guess a number: ");
    } else if(num === answer) {
      console.log("Nailed it, the number I wanted is " + answer)
      break;
    }
  }
}


console.log(checkNumber(answer));