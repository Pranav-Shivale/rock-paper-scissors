let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randNum = Math.random();

  if(randNum < 0.3) {
    return "rock";
  }
  else if(randNum < 0.6) {
    return "paper";
  }
  else {
    return "scissors";
  }
}

function getHumanChoice() {
  let userInput = prompt("Rock, Paper, Scissors!");
  
  return userInput;
}