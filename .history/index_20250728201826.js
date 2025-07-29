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
}     
let humanChoic = getHumanChoice();
console.log("You choice:", playerChoice);


function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
      return "It's a tie!"     
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
   
console.log(playRound("Rock", "scissors"));
console.log(playRound("ROCK", "paper"));
console.log(playRound("rOck" , "rock"))


function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice){
        console.log("It's a tie!");
    } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win! ${humanChoice} beasts ${computerChoice}`);
  }else {
    console.log(`You lose! ${computerChoice} beasts ${humanChoice}`);
  }
} 
  
for(let i = 0; i < 5; i++){
  const humanChoice = prompt("Enter Choose: Rock, Paper, or Scissors");
}
    if (humanScore > computerScore){
        console.log("human wins the game!");
    }else if (computerScore > humanScore){
        console.log("computer wins the game!");
    }else {
        console.log("The game is a tie!");
    }


playGame();  