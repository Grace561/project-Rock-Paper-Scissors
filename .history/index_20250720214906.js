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

function playRound(humanChoice, c) {
  const humanChoice = playerSelection.toLowerCase();
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