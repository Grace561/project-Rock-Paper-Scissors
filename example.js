const rockButton = document.getElementById('rockBtn');
const paperButton = document.getElementById('paperBtn');
const scissorsButton = document.getElementById('scissorsBtn');

rockButton.addEventListener('click', () => {
    playRound('rock');
});

paperButton.addEventListener('click', () => {
    playRound('paper');
});

scissorsButton.addEventListener('click', () => {
    playRound('scissors');
});