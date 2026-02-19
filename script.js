function getComputerChoice() {
  let randNum = Math.random();

  if (randNum < 0.3) {
    return "rock";
  } else if (randNum < 0.6) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let userInput = prompt("Rock, Paper, Scissors!");

  return userInput;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")
  ) {
    humanScore += 1;
    console.log(`You Win! ${humanChoice} beats ${computerChoice}.`);
  } else if (
    (humanChoice == "scissors" && computerChoice == "rock") ||
    (humanChoice == "rock" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "scissors")
  ) {
    computerScore += 1;
    console.log(`You Lose! ${computerChoice} beats ${humanChoice}.`);
  } else {
    console.log(`Tie.`);
  }
}