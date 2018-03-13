//assign var begin value
const maxTries = 5;
var instructions = "Press any key to start the game."
var guessedLetters = [];
var currentWord = "";
var remaimningGuesses = 0;
var statistics = document.getElementById("stats");
var wins = 0;
var losses = 0;
var guessed = 0;
var missed = 0;
var blanks = [];
showInstructions = "";

//created array
var wordBank = ["xwing", "awing", "stardestroyer", "tiefighter", "mfalcon"];

// start game function showinstructions(instructions) {
// document.getElementById("gameRules").innerHTML = instructions;
// console.log(gameRules) }

// function showInstructions(instructions) {
//     document.getElementById("showInstructions").innerHTML = "instructions";
// }



//REFRESHSCREEN FUNCTION
function refreshScreen()
{
  //For Statistics
  statistics.innerHTML = "" + wins + " Wins, " + losses + " Losses";
  if(missed == 5)
  {
    //game over
    for(var i=0;i<currentWord.length;i++)
    {
      blanks[i] = currentWord[i];
    }
    currentWord = "";
  }

  if(currentWord == "")
  {
    if(missed == 6)
    {
      current_instruction_div.innerHTML = "Game Over! Press any key to play again!"
      hangmanImage.src = "assets/images/____.png";
      var output = "";
      for(var i=0;i<blanks.length;i++)
      {
        output = output + blanks[i] + " ";
      }
      blanks.innerHTML = output;
    }
    else if(guesses > 0)
    {
      //if there are guesses with no 6 misses & no word, game was won
      current_instruction_div.innerHTML = "YOU WIN!";
      var output = "";
      for(var i=0;i<blanks.length;i++)
      {
        output = output + blanks[i] + " ";
      }
      blanks.innerHTML = output;
    }
    else
    {
      instructions.innerHTML = "Press any key to get started!"
      hangmanImage.src = "assets/images/____.png";
      blanks.innerHTML = "(no word yet)";    
    }
  }
  else
  {
    var output = "";
    for(var i=0;i<blanks.length;i++)
    {
      output = output + blanks[i] + " ";
    }
    
    blanks_div.innerHTML = output;
    hangmanImage.src = "assets/images/____.png";
    if(guesses == 0)
    {
      instructions.innerHTML = "Press any key to guess a letter!";
    }
  }
}
console.log(refreshScreen);
// }
//START GAME FUNCTION
//Pick a random word & display current rules
function start() {
    //pick a random word
    currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    var length = currentWord.length;
    console.log(currentWord);
    //show current rules gameRules = ("Press any button to start the game.")
    // document.getElementById("gameRules");innerHTML = "instructions";
    // document.getElementByClassName("gameRules").innerHTML = "Press any key to start the game.";
    x=document.getElementsByClassName("gameRules");  // Find the element
x.innerHTML="Hello JavaScript!";    // Change the content
console.log(x);
      // document.getElementById('gameRules');innerText = document.getElementById("instructions");
    }
    
    
    console.log(instructions);
    
    // for(var i=0;i<word.length;i++)
    // {
    //   //put a blank/underscore for that letter
    //   hint.push("_");
    // }
    // refreshScreen();
  

start()

//GUESS LETTER FUNCTION

//


//KEEPS THINGS LIKE ENTER FROM LOGGING GUESSES
// else
//   {
//     if(letter >= 'A' && letter <= 'Z')
//     {


// var myFunc;
// if (guesses === 0) {
//   myFunc = function(theObject) {
//     theObject.make = 'Toyota';
//   }
// }
// var myFunc;
// if (num === 0) {
//   myFunc = function(theObject) {
//     theObject.make = 'Toyota';
//   }
// }
// var myFunc;
// if (num === 0) {
//   myFunc = function(theObject) {
//     theObject.make = 'Toyota';
//   }
// }