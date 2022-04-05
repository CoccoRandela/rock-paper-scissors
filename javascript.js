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
               return outcome = 'loss :(';
           }
           else {
               return outcome = 'win :)';
           }  
       }
       if (computerSelection == "paper") {
           if (playerSelection == "scissors") {
               return outcome = 'win :)';
           }
           else {
               return outcome = 'loss :(';
           }
       }
       if (computerSelection == "scissors") {
           if (playerSelection == "paper") {
               return outcome = 'loss :(';
           }
           else {
               return outcome = 'win :)';
           }
       }
   } else {
       return outcome = 'tie...';
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
        button.classList.toggle ('selected');
        playRound(button.id, computerPlay());
        if (outcome == 'loss :(') {
            roundResult.textContent = outcome;
            computerCounter++;
        } 
        else if (outcome == 'win :)') {
            roundResult.textContent = outcome;
            playerCounter++;
        } 
        else {roundResult.textContent = 'tie...'}
        computerScore.textContent = computerCounter;
        playerScore.textContent = playerCounter;
        if (computerCounter == 5 || playerCounter == 5) {
            const modalContainer = document.createElement('div');
            modalContainer.classList.add('modal-container');
            body.appendChild(modalContainer);
            const modal = document.createElement('div');
            modal.classList.add('modal');
            modalContainer.appendChild(modal);
            const gameResult = document.createElement('p');
            gameResult.textContent = (computerCounter == 5)? 'The computer wins! You suck...': 'You win! Screw computers!';
            modal.appendChild(gameResult);
            const refreshButton = document.createElement('button');
            refreshButton.classList.add('refresh-button');
            refreshButton. textContent = 'play again?';
            modal.appendChild(refreshButton);  
            refreshButton.addEventListener('click', () => {
                window.location.reload();
            })        
        }
    })
})

buttons.forEach(button => {
    button.addEventListener ('mousedown', () => {
        button.classList.toggle ('selected');
    })
})