////Global variable
var wins = 0;
var losses= 0;
var currentScore = 0;
var scoreToGuess = [];
var crystal1 = [];
var crystal2 = [];
var crystal3 = []; 
var crystal4 = [];

////randomNumber Global Function
function randomNumber(min, max){
  return Math.round( Math.random() * (max - min) + min);
}

var resetVariables = function(){
  currentScore = 0;
  $('#yourScore').text(currentScore)
  scoreToGuess = randomNumber(10,40);
  $('#numberToGuess').text(scoreToGuess)
  crystal1 = randomNumber(1,9);
  crystal2 = randomNumber(1,9);
  crystal3 = randomNumber(1,9); 
  crystal4 = randomNumber(1,9);
}


///Prints wins and loss counter to the DOM
$('#wins').text("Wins: " + wins)
$('#losses').text("Losses: " + losses)

/// creates crystal variables with randomNumber function
crystal1 = randomNumber(1, 9)
console.log(crystal1)
crystal2 = randomNumber(1, 9)
console.log(crystal2)
crystal3 = randomNumber(1, 9)
console.log(crystal3)
crystal4 = randomNumber(1, 9)
console.log(crystal4)


/// creates random number for user to try and reach
scoreToGuess = randomNumber(10,40)
$('#numberToGuess').text(scoreToGuess)
console.log(scoreToGuess)


  // Assign each of the values to a button, logs the value of the crystal to currentScore returns new value of currentScore
  ///// if /////////////your score matches the current score to guess then return win, add win to wins variable, reset variables
  /////else if////////// return loss, add to losses variable, reset variables
$('#crystal1').click(function(){
   currentScore = (crystal1 + currentScore);
    $('#yourScore').text("Total: "+ currentScore);  
    if(currentScore === scoreToGuess){
      alert("You Win")
      wins++
      $('#wins').text("Wins: " + wins)
      resetVariables()
    } else if(currentScore > scoreToGuess){
      alert("You Lose")
      losses++
      $('#losses').text("Losses: " + losses)
      resetVariables()
    }             
});

$('#crystal2').click(function(){
  currentScore = (crystal2 + currentScore);
   $('#yourScore').text("Total: "+ currentScore); 
   if(currentScore === scoreToGuess){
    alert("You Win")
    wins++
    $('#wins').text("Wins: " + wins)
    resetVariables()
  } else if(currentScore > scoreToGuess){
    alert("You Lose")
    losses++
    $('#losses').text("Losses: " + losses)
    resetVariables()
  }              
});

$('#crystal3').click(function(){
  currentScore = (crystal3 + currentScore);
   $('#yourScore').text("Total: "+ currentScore);  
   if(currentScore === scoreToGuess){
    alert("You Win")
    wins++
    $('#wins').text("Wins: " + wins)
    resetVariables()
  } else if(currentScore > scoreToGuess){
    alert("You Lose")
    losses++
    $('#losses').text("Losses: " + losses)
    resetVariables()
  }             
});

$('#crystal4').click(function(){
  currentScore = (crystal4 + currentScore);
   $('#yourScore').text("Total: "+ currentScore); 
   if(currentScore === scoreToGuess){
    
     wins++
     $('#wins').text("Wins: " + wins)
     resetVariables()
   }  else if(currentScore > scoreToGuess){
    
     losses++
     $('#losses').text("Losses: " + losses)
     resetVariables()
   }    
});
