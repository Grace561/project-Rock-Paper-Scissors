let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
  const choice = ['rock','paper','scissors']
  const ranNum = Math.floor(Math.random()* choice.length)
  return choice[ranNum]
}
console.log(getComputerChoice());




function getHumanChoice(){
  const HumanChoice = prompt("Enter your choice (Rock, Paper, Scissors)");
  return HumanChoice.toLocaleLowerCase(); 
}




function playRound(humanChoice, computerChoice){
  if (humanChoice === "rock" && computerChoice === "scissors"){
    console.log("You win! rock beats scissors ");
    humanScore++;
  } else if 
    (humanChoice === "scissors" && computerChoice === "paper"){
      console.log("You win! scissors beats paper");
      humanScore++;
  } else if
    (humanChoice === "paper" && computerChoice === "rock"){
      console.log("You win! paper beats rock");
      humanScore++;
  } else if
    (humanChoice === "rock" && computerChoice === "rock"){
      console.log("It's a tie"); 
  } else if 
    (humanChoice === "scissors" && computerChoice === "scissors"){
      console.log("It's a tie");
  } else if 
    (humanChoice === "paper" && computerChoice === "paper"){
     console.log("It's a tie")  ;
  } else if
    (computerChoice === "rock" && humanChoice === "scissors"){
      console.log ("You lose! rock beats scissors");
      computerScore++
  }else if 
    (computerChoice === "scissors" && humanChoice === "paper"){
      console.log("You lose! scissors beats paper");
      computerScore++
  } else if
    (computerChoice === "paper" && humanChoice === "rock"){
      console.log("You lose! paper beats rock");
      computerScore++
    } else if 
    (computerChoice === "paper" && humanChoice === "scissors"){
      console.log("You lose")
    }
}
// const rockButton = document.getElementById('rockBtn');
// const paperButton = document.getElementById('paperBtn');
// const scissorsButton = document.getElementById('scissorsBtn');

// rockButton.addEventListener('click', () => {
//     playRound(rockButton.value);
// });

// paperButton.addEventListener('click', () => {
//     playRound(paperButton.value);
// });

// scissorsButton.addEventListener('click', () => {
//     playRound(scissorsButton.value);
// });

function playGame(){


  for (let i = 0; i < 5; i++) {
      const humanSelection = getHumanChoice();
      const computerSelection = getComputerChoice();
      console.log(`Round ${i + 1}:`);
      console.log(`Player chose: ${humanSelection}`);
      console.log(`Computer chose: ${computerSelection}`);
      playRound(humanSelection, computerSelection);
      console.log(`Current Score: Player ${humanScore} - Computer ${computerScore}`);
  }


  if (humanScore > computerScore) {
      console.log("Congratulations! You won the game!");
    } else if (computerScore > humanScore) {
      console.log("Sorry, the computer won the game.");
    } else {
      console.log("The game is a tie!");
  }
}
console.log(5+5+5*5); 
playGame();
