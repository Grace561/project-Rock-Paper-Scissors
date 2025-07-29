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

function playRound(playerSelection, computerSelection) {
  // Convert playerSelection to lowercase for case-insensitive comparison
  const humanChoice = playerSelection.toLowerCase();

  // Now, use humanChoice in your comparisons
  if (humanChoice === "rock") {
    // Logic for rock
  } else if (humanChoice === "paper") {
    // Logic for paper
  } else if (humanChoice === "scissors") {
    // Logic for scissors
  } else {
    return "Invalid choice. Please choose rock, paper, or scissors.";
  }

  // ... rest of your game logic
}

// Example usage:
playRound("Rock", "paper"); // Will be treated as "rock"
playRound("ROCK", "scissors"); // Will be treated as "rock"
playRound("RocK", "rock"); // Will be treated as "rock"