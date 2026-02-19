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

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")
  ) {
    console.log(`You Win! ${humanChoice} beats ${computerChoice}.`);
  } else if (
    (humanChoice == "scissors" && computerChoice == "rock") ||
    (humanChoice == "rock" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "scissors")
  ) {
    console.log(`You Lose! ${computerChoice} beats ${humanChoice}.`);
  } else {
    console.log(`Tie.`);
  }
}

let btnRock = document.querySelector("#btn-rock");
let btnPaper = document.querySelector("#btn-paper");
let btnScissors = document.querySelector("#btn-scissors");

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