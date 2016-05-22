////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    if (typeof move === 'undefined' || move === null) {
        move = getInput();
    }
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move;
}

function getComputerMove(move) {
    if ((typeof move === 'undefined') || (move === null)) {
        move = randomPlay();
    }
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move;
}

function getWinner(playerMove,computerMove) {
    var winner;

    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */

    //playerMove = "rock";

    //1. it should be a tie if the computer picks rock
    if (playerMove === "rock") {
        if (computerMove === "rock") {
            winner = "tie";
        }

    //2. it should be a computer win if the computer picks paper
        if (computerMove === "paper") {
            winner = "computer";
        }

    //3. it should be a player win if the computer picks scissors
        if (computerMove === "scissors") {
            winner = "player";
        }   
    }
    //playerMove = "paper";

    //1. it should be a player win if the computer picks rock
    else if (playerMove === "paper"){
        if (computerMove === "rock") {
            winner = "player";
        }
    
    //2. it should be a tie if the computer picks paper
        if (computerMove === "paper") {
            winner = "tie";
        }

    //3. it should be a computer win if the computer picks scissors
        if (computerMove === "scissors") {
            winner = "computer";
        }
    }

    //playerMove = "scissors";

    //1. it should be a computer win if the computer picks rock
    else if (playerMove === "scissors"){
        if(computerMove === "rock"){
            winner = "computer";
        }
    //2. it should be a player win if the computer picks paper
        if(computerMove === "paper"){
            winner = "player";
        }
    //3. it should be a tie if the computer picks scissors
        if(computerMove === "scissors"){
            winner = "tie";
        }
   }
    
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var playerChoice, computerChoice, winner;;

    while ((playerWins < 5) && (computerWins < 5)) {
        playerChoice = getPlayerMove(null);
        computerChoice = getComputerMove(null);
        winner = getWinner(playerChoice,computerChoice);

        if(winner === "player"){
            playerWins++;
        }
        else if(winner === "computer"){
            computerWins++;
        }
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + ' ');

    }


   // This function should continue to play Rock Paper Scissors until either the
  // player or the computer has won five times.
  // After each 'round', display some text in the console indicating who played
  // what, who won, and what the current scoreboard looks like.
  // For example,
  //  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
  //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
  /* YOUR CODE HERE */

    //it should end the game once either the player or the computer has won 5 times 

    return [playerWins, computerWins];
}

