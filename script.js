let btnRock = document.querySelector("#btn-rock");
let btnPaper = document.querySelector("#btn-paper");
let btnScissors = document.querySelector("#btn-scissors");
let result = document.querySelector(".result");

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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")
  ) {
    humanScore += 1;
    result.textContent = `You Win! ${humanChoice} beats ${computerChoice}.\nScore: ${humanScore} - ${computerScore}`;
  } else if (
    (humanChoice == "scissors" && computerChoice == "rock") ||
    (humanChoice == "rock" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "scissors")
  ) {
    computerScore += 1;
    result.textContent = `You Lose! ${computerChoice} beats ${humanChoice}.\nScore: ${humanScore} - ${computerScore}`;
  } else {
    result.textContent = `Tie.\nScore: ${humanScore} - ${computerScore}`;
  }

  if(humanScore >= 5) {
    result.textContent = `Congrats! You Won the Game! ${humanScore} - ${computerScore}`;
    humanScore = 0;
    computerScore = 0;
  } else if(computerScore >= 5) {
    result.textContent = `You Lost the Game! Better luck next time. ${humanScore} - ${computerScore}`;
    humanScore = 0;
    computerScore = 0;
  } 
}

btnRock.addEventListener("click", () => {
  console.log("Rock");
  let humanChoice = "rock";
  let computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
});

btnPaper.addEventListener("click", () => {
  console.log("Paper");
  let humanChoice = "paper";
  let computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
});

btnScissors.addEventListener("click", () => {
  console.log("Scissors");
  let humanChoice = "scissors";
  let computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
});
