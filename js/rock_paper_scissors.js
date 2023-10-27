/*---------------------------------------------------------------------------------------------------
//(3)
// Your game is going to play against the computer, so begin with a function called getComputerChoice 
// that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the 
// game to make the computer’s play. Tip: use the console to make sure this is returning the expected 
// output before moving to the next step!
----------------------------------------------------------------------------------------------------*/

function getComputerChoice(){
    let choice=Math.floor(Math.random()*9);
    if (choice >= 6){
        return "Scissors";
    } else if (choice >= 3){
        return "Paper";
    } else {
        return "Rock";
    }
}

function playerChocie(){
    let choice=window.prompt("Type rock, paper, or scissors: ");
    return choice;
}

/*--------------------------------------------------------------------------------
// (4)
// Write a function that plays a single round of Rock Paper Scissors. The
// function should take two parameters - the playerSelection and computerSelection
// - and then return a string that declares the winner of the round like so: 
// "You Lose! Paper beats Rock"
//  
//      - Make your function’s playerSelection parameter case-insensitive (so users 
//        can input rock, ROCK, RocK or any other variation).
----------------------------------------------------------------------------------*/

function playRound(playerSelection, computerSelection){ 

    // converts case-insensitive string to Rock, Paper, or Scissors.
    playerSelection = playerSelection.charAt(0).toUpperCase()+playerSelection.slice(1).toLowerCase();
    
    //Checks to see if the string is legal. 
    while ((playerSelection!=="Rock") && (playerSelection!=="Paper") && (playerSelection!=="Scissors")){
        alert("Error: you must type either: Rock : Paper : Scissors\n");
        playerSelection=playerChocie();
        playerSelection = playerSelection.charAt(0).toUpperCase()+playerSelection.slice(1).toLowerCase();
    }

    if (playerSelection===computerSelection){
        alert("This round is a tie!");
        return 0;
    } 
    else if((playerSelection=="Rock" && computerSelection=="Scissors") ||
              (playerSelection=="Paper" && computerSelection=="Rock") ||
              (playerSelection=="Scissors" && computerSelection=="Paper")){
                alert(`You win! you drew ${playerSelection} and the computer drew ${computerSelection}!`);
                return 1;
              }
    else{
        alert(`You lose! you drew ${playerSelection} and computer drew ${computerSelection}!`);
        return 2;
    }
}

/*-----------------------------------------------------------------------------------------------------------------
// (6)
// Write a NEW function called `game()`. Use the previous function _inside_ of this one to play a 5 round game that
// keeps score and reports a winner or loser at the end.
------------------------------------------------------------------------------------------------------------------*/

function game(){
    let p=0, c=0;
    
   /* for(let x=0; x<5 ;x++){
        let player=playerChocie();
        let computer=getComputerChoice();
        let round=playRound(player, computer);

        if(round==1){ p++; }
        else if(round==2){c++;}
        round=0;
    }*/

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button)=>{
        button.addEventListener('click', () => {
            let round=playRound(button.className, getComputerChoice());
            console.log(round);
        });
    });
    /*
    if(p>c){
        alert(`Congratulations! You won the game with ${p} wins to computers ${c} wins.`);
    }else if(c>p){
        alert(`You lost the game. Sorry. Your score: ${p} \t computer: ${c}`);
    }else{ alert(`Unbelievable! You tied with the computer! Score: P: ${p} C: ${c}`);}
    */
}

game();