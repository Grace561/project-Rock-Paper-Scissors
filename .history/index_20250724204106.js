console.log("Welcome"); 

function getComputerChoice() {
    const choices = ["rock", "paper","Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices [randomIndex];

}    




    
    const computerChoice = getComputerChoice();
    console.log(computerChoice)

 function getHumanChoice() {
  const validChoices = ['rock', 'paper', 'scissors'];
  let humanChoice = '';

  while (!validChoices.includes(humanChoice)) {
    humanChoice = prompt('Choose rock, paper, or scissors:').toLowerCase();

    if (!validChoices.includes(humanChoice)) {
      console.log('Invalid choice. Please enter rock, paper, or scissors.');
    }
  }
  con humanChoice;
} 


