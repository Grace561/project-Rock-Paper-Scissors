console.log("Welcome"); 

function getComputerChoice() {
    const choices = ["rock", "paper","Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices [randomIndex];

}    
    const computerChoice = getComputerChoice();
      console.log(computerChoice)

function getHumanChoice(){
    let humanChoice = prompt("choose: rock, paper, or scissors?");
    return humanChoice;
    // console.log(humanChoice);
}     
let playerChoice = getHumanChoice();
console.log("You choice:", playerChoice);

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        return "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
     { 
        return "You win!";
    } else {
        return "You lose!"; 
    }
    
}

