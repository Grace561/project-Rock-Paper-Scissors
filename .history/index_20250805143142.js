console.log("Welcome");


function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
const computerChoice = getComputerChoice();
console.log(computerChoice);

function getHumanChoice(){
  let choices = prompt("choose: rock, paper, or scissors? ");
  return choices;
}
let humanScore = 0;
let computerScore = 0;


function winner(humanChoice, computerChoice){
  if(humanChoice == computerChoice){
    return "Tie";
  }
  else if(
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ){
      return "humanChoice";
  }
  else {
      return "computerChoice";  
  }
}

function playRound(humanChoice, computerChoice){
    const result = winner(humanChoice , computerChoice) 
    if(result ==  "Tie"){
      return "It's a Tie!"
    }
    else if(result == "humanChoice"){
      return `You win! ${humanChoice} beats ${computerChoice}`
    }
    else{
      return `You lose! ${computerChoice} beats ${computerChoice}`
    }
}
const humanChoice = "rock";
const computerChoice = getComputerChoice();
console.log(p)






// playRound(getComputerChoice,getHumanChoice())

// function getComputerChoice() {
//     const choices = ["rock", "paper","Scissors"];
//     const randomIndex = Math.floor(Math.random() * choices.length);
//     return choices [randomIndex];

// }    
//      const computerChoice = getComputerChoice();
//       console.log(computerChoice);

// function getHumanChoice(){
//     let humanChoice = prompt("choose: rock, paper, or scissors?");
//     return (humanChoice);
// }
//   let humanScore = 0
//   let computerScore = 0


// function playRound(humanChoice, computerChoice){
  // getComputerChoice();
    // humanChoice = humanChoice.toLowerCase();
    // computerChoice = computerChoice.toLowerCase();

//     if (humanChoice === computerChoice){
//         return("It's a tie!");
//     } else if (
//     (humanChoice === "rock" && computerChoice === "scissors") ||
//     (humanChoice === "paper" && computerChoice === "rock") ||
//     (humanChoice === "scissors" && computerChoice === "paper")
//   ) {
//     humanScore++;
//     return(`You win! ${humanChoice} beasts ${computerChoice}`);
//   }else {
//     return(`You lose! ${computerChoice} beasts ${humanChoice}`);
//     computerScore++;
//   }
// }  
// playRound(getComputerChoice , getHumanChoice());
// function playRound(humanChoice, computerChoice){
//     if (humanChoice === computerChoice) {
//       return "It's a tie!"     
//  } else if (
//     (humanChoice === "rock" && computerChoice === "scissors") ||
//     (humanChoice === "paper" && computerChoice === "rock") ||
//     (humanChoice === "scissors" && computerChoice === "paper")
//   ) {
//     return "You win!";
//   } else {
//     return "You lose!";
//   }
// }
   
// console.log(playRound("Rock", "scissors"));
// console.log(playRound("ROCK", "paper"));
// console.log(playRound("rOck" , "rock"))


// function playRound(humanChoice, computerChoice){
//     humanChoice = humanChoice.toLowerCase();

//     if (humanChoice === computerChoice){
//         // console.log("It's a tie!");
//     } else if (
//     (humanChoice === "rock" && computerChoice === "scissors") ||
//     (humanChoice === "paper" && computerChoice === "rock") ||
//     (humanChoice === "scissors" && computerChoice === "paper")
//   ) {
//     console.log(`You win! ${humanChoice} beasts ${computerChoice}`);
//   }else {
//     console.log(`You lose! ${computerChoice} beasts ${humanChoice}`);
//   }
// }


  // let humanScore = 0;
  // let computerScore = 0;;

  // function playGame(){
  // for (let i = 0; i <= 5; i++){
    // const humanChoice = prompt ("Enter Choose: Rock, Paper, or Scissors");
    // if (!humanChoice){
    //   console.log("game cancelled.");
    //   return
    // }
  // console.log(`Round ${i + 1}: ${winner}`);
    // const computerChoice = getComputerChoice();
    // const winner = playRound(humanChoice, computerChoice);
    // console.log(`Round ${i + 1}: ${winner}`);
    // console.log(`Round ${i + 1}: ${winner}`);
    
    // if ("You win!"){
    //   humanScore++;
    // } else if ("You lose!"){
    //   computerScore++
    // }
  // }

  // console.log("game over!");
  // console.log(`final score: human ${humanScore} - computer ${computerScore}`)
  // if (humanScore > computerScore){
  //   console.log("human win the game!"); 
  // } else if (computerScore > humanScore){
  //   console.log("computer win the game!");
  // } else {
  //   console.log("It's a tie!"); 
  // }
// }



// playGame();  
// playGame();  
// playGame();  
// playGame();
// playGame();    