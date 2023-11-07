let playersScore = 0;
let computersScore = 0;

function game () {

let computersChoice;
let playersChoice;

function getComputersChoice () { 
    // у компьютера 3 варианта выбора 
    computersChoice = Math.floor(Math.random() * 3) + 1;   
    
    if (computersChoice == 1) {
        computersChoice = "rock"
    } else if (computersChoice == 2) {
        computersChoice = "paper"
    } else {
        computersChoice = "scissors"
    }
    return computersChoice
}
getComputersChoice()


function getPlayersChoice () {
    return playersChoice = prompt("Choose your weapon", "rock").toLowerCase()    
}
getPlayersChoice()

function gameSession (playersChoice, computersChoice) {

    // Можно не давать очки при ничье. Сделано, чтоб ускорить игру
    if (playersChoice == computersChoice) { 
        ++computersScore;
        ++playersScore;
        console.log (`Draw \n AI score is - ${computersScore} and your Score is - ${playersScore}`);
    } else if (playersChoice == "rock" && computersChoice == "paper") {
        ++computersScore;
        console.log (`You Lose! Paper beats Rock \n AI score is - ${computersScore} ,and your score is - ${playersScore}`);
    } else if (computersChoice == "rock" && playersChoice == "paper") {
        ++playersScore;
        console.log (`You Won! Paper beats Rock \n AI score is - ${computersScore} ,and your score is - ${playersScore}`);
    } else if (playersChoice == "rock" && computersChoice == "scissors") {
        ++playersScore;
        console.log(`You Won! Rock beats Scissors \n AI score is - ${computersScore} ,and your score is - ${playersScore}`);
    } else if (computersChoice == "rock" && playersChoice == "scissors") {
        ++computersScore;
        console.log(`You Lost! Rock beats Scissors \n AI score is - ${computersScore} ,and your score is - ${playersScore}`);
    } else if (playersChoice == "scissors" && computersChoice == "paper") {
        ++playersScore;
        console.log(`You Won! Scissors beat Paper \n AI score is - ${computersScore} ,and your score is - ${playersScore}`);
    } else if (computersChoice == "scissors" && playersChoice == "paper") {
        ++computersScore;
        console.log(`You Lost! Scissors beat Paper \n AI score is - ${computersScore} ,and your score is - ${playersScore}`); 
    } 
}
gameSession(playersChoice, computersChoice)
}

function gameOfFive () {
    while (playersScore != 5 && computersScore != 5) {
        game()
}
console.log (`the final score is: AI = ${computersScore} and player = ${playersScore} `);
playersScore = 0;
computersScore = 0;
}

/**  ---- Можно добавить логику ниже, если хочется  ----

*   if (computersScore > playersScore) {
*         console.log("You lost in a best of 5");
*     } else if (computersScore < playersScore) {
*         console.log("You won in a best of 5. Congrats!");
*     } else {
*        console.log("It's a draw you should try again")
*    }
    
*/