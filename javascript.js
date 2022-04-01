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
               return outcome = "computerWin";
           }
           else {
               return outcome = "playerWin";
           }  
       }
       if (computerSelection == "paper") {
           if (playerSelection == "scissors") {
               return outcome = "playerWin";
           }
           else {
               return outcome = "computerWin";
           }
       }
       if (computerSelection == "scissors") {
           if (playerSelection == "paper") {
               return outcome = "computerWin";
           }
           else {
               return outcome = "playerWin";
           }
       }
   } else {
       return outcome = "tie";
   }
}

function game () {
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


console.log (game())  