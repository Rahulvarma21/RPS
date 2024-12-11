const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("your-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
const userScoreDisplay = document.getElementById("score");

let userChoice;
let computerChoice;
let result;
let userscore = 0;
possibleChoices.forEach((possibleChoices) =>
  possibleChoices.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateCompputerChoice();
    getResult();
    changeScore();
  })
);

function generateCompputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "scissors";
  }
  if (randomNumber === 3) {
    computerChoice = "paper";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "Its a draw";
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = "You win";
    userscore = userscore + 1;
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    result = "You lose";
  }
  if (computerChoice === "scissors" && userChoice === "rock") {
    result = "You win";
    userscore = userscore + 1;
  }
  if (computerChoice === "scissors" && userChoice === "paper") {
    result = "You lose";
  }
  if (computerChoice === "paper" && userChoice === "scissors") {
    result = "You win";
    userscore = userscore + 1;
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = "You lose";
  }
  resultDisplay.innerHTML = result;
}

function changeScore() {
  userScoreDisplay.innerHTML = userscore;
}
