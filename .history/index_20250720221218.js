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

function playRound(HumanChoice, computerChoice) {

const HumanChoice = getHumanChoice();
const computerChoice= getComputerChoice();

console.log (playRound(HumanChoice, computerChoice));
}