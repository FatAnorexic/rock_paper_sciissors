
# Assignment

1. Start a new Git repo for your project.
2. Create a blank HTML document with a script tag (Hint: it is best practice to link an external .js file). This game is going to be played completely from the console, so don’t worry about putting anything else in there.
3. Your game is going to play against the computer, so begin with a function called `getComputerChoice` that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. _Tip: use the console to make sure this is returning the expected output before moving to the next step!_
4. Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the `playerSelection` and `computerSelection` - and then return a string that declares the winner of the round like so: `"You Lose! Paper beats Rock"`
    - Make your function’s playerSelection parameter case-insensitive (so users can input `rock`, `ROCK`, `RocK` or any other variation).
5. **Important note:** you want to `return` the results of this function call, _not_ `console.log()` them. You’re going to use what you `return` later on, so let’s test this function by using console.log to see the results:
```javascript
function playRound(playerSelection, computerSelection) {
  // your code here!
}
 
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
```

6. Write a NEW function called `game()`. Use the previous function _inside_ of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
    - You have not officially learned how to “loop” over code to repeat function calls… if you already know about loops from somewhere else (or if you feel like doing some more learning) feel free to use them. If not, don’t worry! Just call your `playRound` function 5 times in a row. Loops are covered in the next lesson.
    - At this point you should be using `console.log()` to display the results of each round and the winner at the end.
    - Use `prompt()` to get input from the user. [Read the docs here if you need to.](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)
    - Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.
    - Feel free to create more “helper” functions if you think it would be useful.

# Psuedo-Code

```
computerChoice(){
variable of random number between 0-8
return variable
}

playerChoice(){
prompt user to input rock, paper or scissors
return choice
}

round(playerChoice(), computerChoice()){
checks and fixes any case-insensitivety by player
checks for correct string->returns player to prompt otherwise
compares strings: If equal it is a tie.
else if p=rock & c=scissors or p=paper & c=rock or p=scissors & c=paper player wins
else player lose
}

game(){
declare counters for computer and player

for loop iterates 5 times{
playerChoice()
round(playerChoice(), computerChoice())
if player wins: message & p++ 
else if computer wins: message & c++
else: tie
}

if player won the most: message
if computer won the most: message
else: tied
}
```
