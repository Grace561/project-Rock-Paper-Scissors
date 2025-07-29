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
let humanChoice = getHumanChoice();
console.log("You choice:",humanChoice)


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

function playGame(){
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++){
    const humanChoice = prompt ("Enter Choose: Rock, Paper, or Scissors");
    if (!humanChoice){
      console.log("game cancelled.");
    }

    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);

    console.log(`Round ${i + 5}: ${result}`);
    
    if result("win!"){
      humanScore++;
    } else if ("lose"){
      computerScore++
    }
  }

  console.log("game over!");
  console.log(`final score: human ${humanScore} - computer ${computerScore}`);
  if (humanScore > computerScore){
    console.log("human win the game!"); 
  } else if (computerScore > humanScore){
    console.log("computer win the game!");
  } else {
    console.log("It's a tie!"); 
  }
}



playGame();  