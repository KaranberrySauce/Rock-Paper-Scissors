function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, Paper or Scissors?");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if (playRound(playerSelection, computerSelection) === "You win!") {
        playerScore++;
        } else if (playRound(playerSelection, computerSelection) === "You lose!") {
        computerScore++;
        }
    }
    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else if (playerScore < computerScore) {
        console.log("You lose the game!");
    } else {
        console.log("It's a tie!");
    }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("It's a tie!");
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      console.log("You lose! Paper beats rock");
    } else {
      console.log("You win! Rock beats scissors");
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      console.log("You lose! Scissors beats paper");
    } else {
      console.log("You win! Paper beats rock");
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      console.log("You lose! Rock beats scissors");
    } else {
      console.log("You win! Scissors beats paper");
    }
  }
}
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
