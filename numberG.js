let prompt = require("prompt-sync")();

let secretNumber = Math.floor(Math.random() * 100);

function checkNumber(num) {

  let answer = prompt("Guess a number: ");
  let numbersTried = [];
  let chances = 10;
  for (let i = 0; i < 9; i++) {

    if (num == answer) {
      if (i === 0) {
        return ("BOOM FIRST TRY BABY!!!!! I wanted " + answer + " and you got it on your first try!" + "\n" + "Thanks for playing :)")
      } else if (i === 1) {
        return ("WOW GOT IT ON YOUR 2ND TRY! I wanted " + answer + " and you got it!" + "\n" + "Thanks for playing :)")
      } else if (i === 2) {
        return ("Third time's the charm!" + "I wanted " + answer + "!" + "\n" + "Thanks for playing :)")
      } else if (i === 8) {
        return ("Close one! You guessed correctly on your last chance!" + answer + " is the number I wanted" + "\n" + "Thanks for playing :)")
      } else {
        return ("Nailed it! The number I wanted is " + answer + " it only took you " + (i + 1) + " attempts to guess correctly!" + "\n" + "Thanks for playing :)")
      }
    } else if (isNaN(answer)) {
      console.log("I'm not convinced " + answer + " is a number, please enter a positional notation digit from 1 to 100")
      console.log("You have " + chances + " chances remaining")
      answer = prompt("Guess a number: ")
    } else if (numbersTried.includes(answer)) {
      console.log("Ya'll tried that number already")
      answer = prompt("Guess a number: ");
    } else if (i === 8 && num != answer) {
      console.log("You loose ... looser" + "\n" + "JKJK!" + "\n" + "Thanks for playing :)")
    } else if (num > answer) {
      chances = chances - 1
      numbersTried.push(answer)
      console.log("The number I am thinking of is higher than " + answer)
      console.log("You have " + chances + " chances remaining")
      answer = prompt("Guess a number: ");
    } else if (num < answer) {
      chances = chances - 1
      numbersTried.push(answer)
      console.log("The number I am thinking of is lower than " + answer)
      console.log("you have " + chances + " chances remaining")
      answer = prompt("Guess a number: ");
    }
  }
  return "This game was made by 0lgatron"
}



console.log(checkNumber(secretNumber));