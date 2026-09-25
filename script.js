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

function getHumanChoice() {
  let userChoice = prompt("Please enter your choice (Rock, Paper, Scissors): ");
  userChoice = userChoice.toLowerCase();
  if (
    userChoice == "rock" ||
    userChoice == "paper" ||
    userChoice == "scissors"
  ) {
    return userChoice;
  } else {
    console.error("Please enter a valid text (paper, scissors, rock)!");
    return undefined;
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice == undefined) {
      return;
    }
    const loseMessage = `You lose! ${computerChoice} beats ${humanChoice}`;
    const winMessage = `You won! ${humanChoice} beats ${computerChoice}`;
    const equalMessage = `This round is equivalent! ${humanChoice} = ${computerChoice}`;
    if (humanChoice == "rock" && computerChoice == "paper") {
      console.log(loseMessage);
      computerScore++;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
      console.log(loseMessage);
      computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
      console.log(loseMessage);
      computerScore++;
    } else if (computerChoice == humanChoice) {
      console.log(equalMessage);
    } else {
      console.log(winMessage);
      humanScore++;
    }
  }

  for (let i = 0; i <= 4; i++) {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    playRound(humanChoice, computerChoice);
  }
  if (computerScore > humanScore) {
    console.log(
      `You lose! The computer won. The scores are => ${computerScore} > ${humanScore}`,
    );
  } else if (humanScore > computerScore) {
    console.log(
      `You won! The computer loses. The scores are => ${humanScore} > ${computerScore}`,
    );
  } else {
    console.log(
      `There was no winner! The scores were equal. Scores are => ${humanScore} = ${computerScore}`,
    );
  }
}

playGame();
