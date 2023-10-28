

//Making my score variables global so that they retain their value in memory beyond the scoreBoard
// function
let player=0, computer=0, tie=0;

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
    
    
   const container=document.querySelector('#container')
   const message=document.querySelector('.message');
    if (playerSelection===computerSelection){

        message.textContent= 'This round is a tie!';
        container.appendChild(message);
        return 0;
    } 
    
    else if((playerSelection=="Rock" && computerSelection=="Scissors") ||
              (playerSelection=="Paper" && computerSelection=="Rock") ||
              (playerSelection=="Scissors" && computerSelection=="Paper")){
                
                message.textContent=`You win! you drew ${playerSelection} and the computer drew ${computerSelection}!`;
                container.appendChild(message);
                return 1;
    }
    
    else{
        message.textContent=`You lose! you drew ${playerSelection} and computer drew ${computerSelection}!`;
        container.appendChild(message);
        return 2;
    }
}

/*-----------------------------------------------------------------------------------------------------------------
// (6)
// Write a NEW function called `game()`. Use the previous function _inside_ of this one to play a 5 round game that
// keeps score and reports a winner or loser at the end.
------------------------------------------------------------------------------------------------------------------*/

function game(){
    let round;
    
    const buttons=document.querySelectorAll('button');
    buttons.forEach((button)=>{
        button.addEventListener('click', () => {
            
            round=playRound(button.className, getComputerChoice());
            console.log(round);
            
            scoreBoard(round);
        });
    });
}

function scoreBoard(round){
    // console.log(`Player: ${player} Computer: ${computer} Tie: ${tie}`);
    
    switch(round){
        case 0: tie++;
        break;
        case 1: player++;
        break;
        case 2: computer++;
        break;
    }

    let score=document.querySelector('.score');
    score.textContent=`Player: ${player}\tComputer: ${computer}\tTie: ${tie}`;
    
    if(player===5||computer===5){
        
        //First disable all the play buttons, so that the game can no longer continue
        //without the player choosing to reset it.

        let rock = document.querySelector('.Rock');
        let paper=document.querySelector('.Paper');
        let scissors=document.querySelector('.Scissors');
        
        rock.disabled=true;  
        paper.disabled=true;
        scissors.disabled=true;

        //Display winning or losing message for the player
        if(player>computer){
            score.textContent=`Congratulations! You won the game with ${player} wins to computers ${computer} wins.`;
        }else{
            score.textContent= `You lost the game. Sorry. Your score: ${player} \t computer: ${computer}`;
        }

        //Code below creates a new button in the DOM tree which will have an event
        //listener attached. Upon click the game will reset and buttons will be enabled
        const btn=document.createElement('BUTTON');
        let text=document.createTextNode('Reset');
        btn.appendChild(text);
        document.body.appendChild(btn)

        btn.addEventListener('click', () => {
            // reset global variables
            player=0; computer=0; tie=0;
            score.textContent=`Player: ${player}\tComputer: ${computer}\tTie: ${tie}`;
            
            //delete the button, and re-enable the buttons. 
            document.body.removeChild(btn);
            rock.disabled=false;
            paper.disabled=false;
            scissors.disabled=false;
        });
        
    }
}

game();