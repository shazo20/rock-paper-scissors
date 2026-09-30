function getComputerChoice() {
  let randomNumber = Math.random();
  if (randomNumber < 1 / 3) {
    return "rock";
  } else if (randomNumber < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

// function getHumanChoice() {
//   let userChoice = prompt("Please enter your choice (Rock, Paper, Scissors): ");
//   userChoice = userChoice.toLowerCase();
//   if (
//     userChoice == "rock" ||
//     userChoice == "paper" ||
//     userChoice == "scissors"
//   ) {
//     return userChoice;
//   } else {
//     console.error("Please enter a valid text (paper, scissors, rock)!");
//     return undefined;
//   }
// }
let gameOver = false;
function playGame(humanChoice) {
  if (gameOver) {
    return;
  }
  function playRound(humanChoice, computerChoice) {
    const loseMessage = `You lose! ${computerChoice} beats ${humanChoice}`;
    const winMessage = `You won! ${humanChoice} beats ${computerChoice}`;
    const equalMessage = `This round is equivalent! ${humanChoice} = ${computerChoice}`;
    if (humanChoice == "rock" && computerChoice == "paper") {
      message.textContent = loseMessage;
      computerScore++;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
      message.textContent = loseMessage;
      computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
      message.textContent = loseMessage;
      computerScore++;
    } else if (computerChoice == humanChoice) {
      message.textContent = equalMessage;
    } else {
      message.textContent = winMessage;
      humanScore++;
    }
  }

  let computerChoice = getComputerChoice();
  // let humanChoice = getHumanChoice();

  playRound(humanChoice, computerChoice);
  score.textContent = `You: ${humanScore} | Computer: ${computerScore} `;
  if (computerScore === 5) {
    message.textContent = `You lose! The computer won. The scores are => ${computerScore} > ${humanScore}`;
    gameOver = true;
  } else if (humanScore === 5) {
    message.textContent = `You won! The computer loses. The scores are => ${humanScore} > ${computerScore}`;
    gameOver = true;
  }
}
let humanScore = 0;
let computerScore = 0;
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const message = document.querySelector(".message");
const score = document.querySelector(".score");
rock.addEventListener("click", () => playGame("rock"));
paper.addEventListener("click", () => playGame("paper"));
scissors.addEventListener("click", () => playGame("scissors"));
