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
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move||getInput()/* Your Expression */;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move||randomPlay()/* Your Expression */;
}

function getWinner(plr,com) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (plr == com){
        winner = "A TIE GAME!";
    } else if (plr == "paper" && com == "scissors"){
        winner = "computer";
    } else if (plr == "scissors" && com == "rock"){
        winner = "computer"
    } else if (plr == "rock" && com == "paper"){
        winner = "computer";
    } else {
        winner = "player";
    }

    return winner;
}




function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
  // This function should continue to play Rock Paper Scissors until either the
  // player or the computer has won five times.
  // After each 'round', display some text in the console indicating who played
  // what, who won, and what the current scoreboard looks like.
  // For example,
  //  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
  //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    /* YOUR CODE HERE */
  
    function playGame(){
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    var whoWins = getWinner(playerMove,computerMove);
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
        console.log("Winner in this round is - "+ whoWins + "!");
        if(whoWins == "player"){
            playerWins++}else{
            computerWins++}
        console.log('The score is currently ' + playerWins + ' to ' +               computerWins + '\n')
    }
    
    while(playerWins<5 && computerWins <5){    
    playGame();
    }
    
    if(playerWins == 5){
    console.log("Player wins!")
    }
    
    if(computerWins == 5){
    console.log("Computer wins!")
    }
    
}

playToFive();