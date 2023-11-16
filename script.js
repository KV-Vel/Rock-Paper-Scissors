const startGameBtn = document.querySelector('.start-game-btn');
const btnContainer = document.querySelector('.button-container');
let playersChoice; 
let playersScore = 0;
let roundCounterSpan = document.querySelector('.rounds-counter');
let counterOfRounds = 0;
let computersScore = 0;
const gameBtn = document.querySelectorAll('.game-btn'); 
const aiScore = document.querySelector('.ai-Score');
const yourScore = document.querySelector('.player-Score');
const finalResult = document.querySelector('.final-result');
const paragraph = document.querySelector('.result-info');
let resultMessage;

/* Starting Game button */
startGameBtn.addEventListener('click',()=>{

    btnContainer.classList.toggle('button-container');

    // With hitting the Start button, score is reset
    paragraph.textContent = '';
    playersScore = 0;
    computersScore = 0;
    aiScore.textContent = 0;
    yourScore.textContent = 0;
    finalResult.textContent = '';
    counterOfRounds = 0;
    roundCounterSpan.textContent = 0;
});


/* Players Choice with starting game */
gameBtn.forEach ((btn) => {

    btn.addEventListener('click', () => {
        if (btn.classList.contains('btn-rock')) {
            playersChoice = 'rock';
        } else if (btn.classList.contains('btn-paper')) {
            playersChoice = 'paper';
        } else if (btn.classList.contains('btn-scissors')) {
            playersChoice = 'scissors';
        }

        if (playersScore !=5 && computersScore != 5) game();
        });
})

function showRoundResult () {
    aiScore.textContent = computersScore;
    yourScore.textContent = playersScore;
}

const retryBtn = document.querySelector('.retry-btn');

retryBtn.addEventListener('click', () => {

    paragraph.textContent = '';
    playersScore = 0;
    computersScore = 0;
    aiScore.textContent = 0;
    yourScore.textContent = 0;
    finalResult.textContent = '';
    counterOfRounds = 0;
    roundCounterSpan.textContent = 0;
})

/* Rock Paper Scissors game */
function game() {

let computersChoice;

function getComputersChoice () { 

    computersChoice = Math.floor(Math.random() * 3) + 1;   
    
    if (computersChoice == 1) {
        computersChoice = 'rock';
    } else if (computersChoice == 2) {
        computersChoice = 'paper';
    } else {
        computersChoice = 'scissors';
    }
    return computersChoice
}
getComputersChoice()

function gameSession (playersChoice, computersChoice) {

    if (playersChoice == computersChoice) { 
        showRoundResult()
        resultMessage = `Draw! AI — ${computersChoice} and Player — ${playersChoice}`;
    } 
    if (playersChoice == 'rock' && computersChoice == 'paper' ||
        computersChoice == 'rock' && playersChoice == 'scissors' ||
        computersChoice == 'scissors' && playersChoice == 'paper') {
        ++computersScore;
        showRoundResult()
        resultMessage = `You Lost! AI — ${computersChoice} ,and Player — ${playersChoice}`;
    } 
    if (computersChoice == 'rock' && playersChoice == 'paper' ||
        playersChoice == 'rock' && computersChoice == 'scissors' ||
        playersChoice == 'scissors' && computersChoice == 'paper') {
        ++playersScore;
        showRoundResult()
        resultMessage = `You Won! AI — ${computersChoice} ,and Player — ${playersChoice}`;
    }
    paragraph.textContent = resultMessage;
    ++counterOfRounds;
    roundCounterSpan.textContent = counterOfRounds;
}
gameSession(playersChoice, computersChoice)

function showFinalResult () {

    if (computersScore > playersScore) {
    finalResult.textContent = 'You LOST';
    finalResult.style.color = 'red';
    } else if (computersScore < playersScore) {
        finalResult.textContent = 'You WON';
        finalResult.style.color = 'green';
        } else {
            finalResult.textContent = 'It\'s a DRAW';
            finalResult.style.color = 'gray';
        }
}
if (playersScore === 5 || computersScore === 5) showFinalResult()
} 
