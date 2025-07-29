console.log("Welcome"); 

function getComputerChoice() {
    const choices = ["rock", "paper","Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices [randomIndex];

}    

    
    const computerChoice = getComputerChoice();
    console.log(computerChoice)

function getHumanChoice(){
    let validChoices = false;
    while (validChoices == false){
        const humanChoice = prompt("Rock Paper Scissors");
        if(humanChoice == null){
            continue;
        }
        const humanChoiceInLo
    }
}


