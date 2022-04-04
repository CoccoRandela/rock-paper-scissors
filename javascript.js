function computerPlay () {
    let randomNumber = Math.floor( Math.random() *3);
    if ( randomNumber == 0) {
        return "rock";
    } else if (randomNumber == 1) {
        return "paper";
    } else {return "scissors"}
}

function playRound(playerSelection,computerSelection) {
    if (computerSelection != playerSelection) {
       if (computerSelection == "rock") {
           if (playerSelection == "scissors") {
               return outcome = 'lost';
           }
           else {
               return outcome = 'win';
           }  
       }
       if (computerSelection == "paper") {
           if (playerSelection == "scissors") {
               return outcome = 'win';
           }
           else {
               return outcome = 'lost';
           }
       }
       if (computerSelection == "scissors") {
           if (playerSelection == "paper") {
               return outcome = 'lost';
           }
           else {
               return outcome = 'win';
           }
       }
   } else {
       return outcome = 'tie';
   }
}

const body = document.querySelector('body')
const buttons = document.querySelectorAll('button');
const roundResult = document.querySelector('#result');
const computerScore = document.querySelector('#computerScore');
const playerScore = document.querySelector('#playerScore');
let computerCounter = 0;
let playerCounter = 0;
computerScore.textContent = computerCounter;
playerScore.textContent = playerCounter;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.id, computerPlay());
        if (outcome == 'lost') {
            roundResult.textContent = outcome;
            computerCounter++;
        } 
        else if (outcome == 'win') {
            roundResult.textContent = outcome;
            playerCounter++;
        } 
        else {roundResult.textContent = 'tie'}
        computerScore.textContent = computerCounter;
        playerScore.textContent = playerCounter;
        if (computerCounter == 5 || playerCounter == 5) {
            const gameResult = document.createElement('div');
            gameResult.classList.add('gameResult');
            gameResult.textContent = (computerCounter == 5)? 'the computer wins! You suck': 'you win! Fuck computers';
            body.appendChild(gameResult);
            const refreshButton = document.createElement('button');
            const refreshText = document.createElement('a');
            refreshText. textContent = 'play again?';
            refreshText.setAttribute('href', 'index.html');
            body.appendChild(refreshButton);         
            refreshButton.appendChild(refreshText);   
        }
    })
})



/*function game () {
    let computerScore = 0;
    let playerScore = 0;
    while (computerScore < 5 && playerScore < 5){
        const playerSelection = prompt("Choose your weapon!").toLowerCase();
        if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
            console.log ("Please choose a playable weapon...");
            continue;
        }
        const computerSelection = computerPlay();
        outcome = 0
        playRound (playerSelection, computerSelection);
        if (outcome == "computerWin") {
            console.log ("round lost");
            computerScore ++;
        } else if (outcome == "playerWin"){
            console.log ("round won");
            playerScore ++;
        } else {console.log ("tie round")}
    }
   let gameResult = (computerScore > playerScore)? "You lost the game!" : 
   (computerScore == playerScore)? "Tie game!": 
   "You won the game!";
    return gameResult; 
}


console.log (game())*/  