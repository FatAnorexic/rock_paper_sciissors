/*---------------------------------------------------------------------------------------------------
//(3)
// Your game is going to play against the computer, so begin with a function called getComputerChoice 
// that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the 
// game to make the computer’s play. Tip: use the console to make sure this is returning the expected 
// output before moving to the next step!
----------------------------------------------------------------------------------------------------*/

function getComputerChoice(){
    let choice=Math.floor(Math.random()*10);
    if (choice > 6){
        return "Scissors";
    } else if (choice > 3){
        return "Paper";
    } else {
        return "Rock";
    }
}

console.log(getComputerChoice());