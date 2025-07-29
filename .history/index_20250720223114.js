console.log("Welcome"); 

function getComputerChoice() {
    const choices = ["rock", "paper","Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices [randomIndex];

}    

    
    // const computerChoice = getComputerChoice();
    // console.log(computerChoice)


function getHumanChoice(){
    let userChoice = prompt("choose: rock, paper, or scissors?");
    return userChoice;
}     
let playerChoice = getHumanChoice();
console.log("You choice:", playerChoice);

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}



function playRound(humanChoice, computerChoice) {
  const humanSelection = humanChoice.toLowerCase();
  const computerSelection = computerChoice.toLowerCase();

  if (humanSelection === computerSelection) {
    console.log("It's a tie!");
  } else if (
    (humanSelection === 'rock' && computerSelection === 'scissors') ||
    (humanSelection === 'paper' && computerSelection === 'rock') ||
    (humanSelection === 'scissors' && computerSelection === 'paper')
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`)
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  }
}

playRound("Rock", "Paper");    
playRound("Scissors", "Paper"); 
playRound("Rock", "Rock");     


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log (playRound(humanSelection, computerSelection));

function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  function playRound(playerSelection, computerSelection) {
    // ... (your existing playRound logic, using playerScore and computerScore) ...
    if (/* player wins */) {
        playerScore++;
    } else if (/* computer wins */) {
        computerScore++;
    }
    // Return the result of the round (e.g., "You win!", "You lose!", "Tie!")
  }

  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice(); // Assuming you have this function
    const computerSelection = getComputerChoice(); // Assuming you have this function
    const roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult);
  }

  // You can access the final scores here
  console.log(`Final Score: Player ${playerScore} - Computer ${computerScore}`);
  
  if (playerScore > computerScore) {
    console.log("You win the game!");
  } else if (playerScore < computerScore) {
    console.log("You lose the game!");
  } else {
    console.log("It's a tie!");
  }
}

playGame();
