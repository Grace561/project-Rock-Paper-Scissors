console.log("Welcome"); 

function getComputerChoice() {
    const choices = ["rock", "paper","Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices [randomIndex];

}    

    
    const computerChoice = getComputerChoice();
    console.log(computerChoice)


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
  const humanChoice = humanChoice.toLowerCase();
  if (humanChoice === "rock") {
  } else if (humanChoice === "paper") {
  } else if (humanChoice === "scissors") {
  } else {
    return "Invalid choice. Please choose rock, paper, or scissors.";
  }
  
}

playRound("Rock", "paper");
playRound("ROCK", "scissors"); 
playRound("RocK", "rock"); 


function playRound(humanChoice, computerChoice) {
  // Convert choices to lowercase for case-insensitive comparison
  const humanSelection = humanChoice.toLowerCase();
  const computerSelection = computerChoice.toLowerCase();

  if (humanSelection === computerSelection) {
    console.log("It's a tie!");
  } else if (
    (humanSelection === 'rock' && computerSelection === 'scissors') ||
    (humanSelection === 'paper' && computerSelection === 'rock') ||
    (humanSelection === 'scissors' && computerSelection === 'paper')
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    // You might also increment a humanScore variable here
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    // You might also increment a computerScore variable here
  }
}

// Example usage:
// Assuming you have getHumanChoice() and getComputerChoice() functions
// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();
// playRound(humanSelection, computerSelection);

// Or for a direct test:
playRound("Rock", "Paper");    // Expected: You lose! Paper beats Rock
playRound("Scissors", "Paper"); // Expected: You win! Scissors beats Paper
playRound("Rock", "Rock");      // Expected: It's a tie!