console.log("Welcome");

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  //  function to get computer's choice
  function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
const computerChoice = getComputerChoice();
      console.log(computerChoice)

  // Function to play a single round
  function playRound(humanChoice, computerChoice) {
    // humanChoice = humanChoice.toLowerCase(); 

    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (humanChoice === 'rock' && computerChoice === 'scissors') ||
      (humanChoice === 'paper' && computerChoice === 'rock') ||
      (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    }
  }

  // Play 5 rounds
  for (let i = 0; i < 5; i++) {
    const humanChoice = prompt("Enter your choice (rock, paper, or scissors):");
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log(`Score: You - ${humanScore}, Computer - ${computerScore}`);
  }

  //  the final winner
  if (humanScore > computerScore) {
    console.log("You win the game!");
  } else if (computerScore > humanScore) {
    console.log("computer wins the game.");
  } else {
    console.log("The game is a tie!");
  }
}

// Call the playGame function to start the game
playGame();
