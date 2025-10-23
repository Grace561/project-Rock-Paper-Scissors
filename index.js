let humanScore = 0;
let computerScore = 0;

const humanScoreSpan = document.createElement('div')
const computerScoreSpan = document.createElement('div')

const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "click your choice!";

container.appendChild(content);

// create three button for each seletion

const rockButton = document.createElement('button');
const paperButton = document.createElement('button');
const scissorsButton = document.createElement('button');

container.appendChild(rockButton);
container.appendChild(paperButton);
container.appendChild(scissorsButton);

// add a text content
rockButton.textContent = 'Rock';
paperButton.textContent = 'Paper';
scissorsButton.textContent = 'Scissors';

// add an event listener to each button
rockButton.addEventListener('click', function(){
  const humanChoice = 'rock';
  const computerChoice = getComputerChoice();
  playRound(humanChoice,computerChoice);
  container.appendChild(humanScoreSpan);
  container.appendChild(computerScoreSpan);
  humanScoreSpan.textContent =`Player: ${humanScore}`;
  computerScoreSpan.textContent =`computer: ${computerScore}`;
  checkScore();
 });

paperButton.addEventListener('click', function(){
  const humanChoice = 'paper';
  const computerChoice = getComputerChoice();
  playRound(humanChoice,computerChoice);
  container.appendChild(humanScoreSpan);
  container.appendChild(computerScoreSpan);
  humanScoreSpan.textContent = `player: ${humanScore}`;
  computerScoreSpan.textContent = `computer: ${computerScore}`;
  checkScore();
});

scissorsButton.addEventListener('click',function(){
  const humanChoice = 'scissors';
  const computerChoice = getComputerChoice();
  playRound(humanChoice,computerChoice);
  container.appendChild(humanScoreSpan);
  container.appendChild(computerScoreSpan);
  humanScoreSpan.textContent = `player: ${humanScore}`;
  computerScoreSpan.textContent = `computer: ${computerScore}`;
  checkScore();
});



const resultsDisplay = document.createElement("div");
resultsDisplay.textContent = 'results:';
container.appendChild(resultsDisplay);




function getComputerChoice(){
  const choice = ['rock','paper','scissors']
  const ranNum = Math.floor(Math.random()* choice.length)
  return choice[ranNum]
}
// console.log(getComputerChoice());


function getHumanChoice(){
  const HumanChoice = prompt("Enter your choice (Rock, Paper, Scissors)");
  return HumanChoice.toLocaleLowerCase(); 
}





function playRound(humanChoice, computerChoice){
  if (humanChoice === "rock" && computerChoice === "scissors"){
    resultsDisplay.textContent = "You win! rock beats scissors "
    humanScore++;
  } else if 
    (humanChoice === "scissors" && computerChoice === "paper"){
      resultsDisplay.textContent = "You win! scissors beats paper";
      humanScore++;
  } else if
    (humanChoice === "paper" && computerChoice === "rock"){
      resultsDisplay.textContent = "You win! paper beats rock";
      humanScore++;
  } else if
    (humanChoice === "rock" && computerChoice === "rock"){
      resultsDisplay.textContent = "It's a tie"; 
  } else if 
    (humanChoice === "scissors" && computerChoice === "scissors"){
      resultsDisplay.textContent = "It's a tie";
  } else if 
    (humanChoice === "paper" && computerChoice === "paper"){
     resultsDisplay.textContent = "It's a tie";
  } else if
    (computerChoice === "rock" && humanChoice === "scissors"){
      resultsDisplay.textContent = "You lose! rock beats scissors";
      computerScore++
  }else if 
    (computerChoice === "scissors" && humanChoice === "paper"){
      resultsDisplay.textContent = "You lose! scissors beats paper";
      computerScore++
  } else if
    (computerChoice === "paper" && humanChoice === "rock"){
      resultsDisplay.textContent = "You lose! paper beats rock";
      computerScore++
    } else if 
    (computerChoice === "paper" && humanChoice === "scissors"){
      resultsDisplay.textContent = "You lose";
    }
}




function checkScore(){
    if (humanScore === 5) {
     prompt ("human  wins  the game!");
    humanScore = 0;
    computerScore = 0;
    } else if (computerScore === 5) {
      prompt ("computer wins the game.");
      humanScore = 0;
      computerScore = 0;
    } else {
      
  }

}

