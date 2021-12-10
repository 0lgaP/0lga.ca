let prompt = require("prompt-sync")();

let secretNumber = Math.floor(Math.random() * 100);

function checkNumber(num) {
  let answer = prompt("Guess a number: ");
  let numbersTried = [];
  let chances = 10;
  for (let i = 0; i < 9; i++) {
    if (num == answer) {
      return ("Nailed it, the number I wanted is " + answer + " it only took " + chances + " attempts")
    }
    else if (isNaN(answer)) {
      console.log("I'm not sure this is a number, please enter a number form 1 to 100")
      console.log("you have " + chances + " chances remaining")
      answer = prompt("Guess a number: ")
    } else if (numbersTried.includes(answer)) {
      console.log("Ya'll tried that number already")
      answer = prompt("Guess a number: ");
    } else if (num > answer) {
      chances = chances - 1
      numbersTried.push(answer)
      console.log("The number I am thinking of is higher than " + answer)
      console.log("you have " + chances + " chances remaining")
      answer = prompt("Guess a number: ");
    } else if (num < answer) {
      chances = chances - 1
      numbersTried.push(answer)
      console.log("The number I am thinking of is lower than " + answer)
      console.log("you have " + chances + " chances remaining")
      answer = prompt("Guess a number: ");
    } else if (num === answer) {
      return ("Nailed it, the number I wanted is " + answer + "It only took " + chances + " attempts")
    }
  } return ("Thanks for playing!")
}
console.log(checkNumber(secretNumber));