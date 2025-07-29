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

function playRound(humanChoice, c){

}

