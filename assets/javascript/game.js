////Global variable
var wins = [];
var losses= [];
var currentScore = 0;
var scoreToGuess = [];
var crystal1 = [];
var crystal2 = [];
var crystal3 = []; 
var crystal4 = [];

var a = 0;
var b = 0;
  


////randomNumber Function
function randomNumber(min, max){
  return Math.round( Math.random() * (max - min) + min);
}

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

  // Assign each of the values to a button, logs the value of the crystal to currentScore returns new value of currentScore
$('#crystal1').click(function(){
   currentScore = (crystal1 + currentScore);
    $('#yourScore').text("Total: "+ currentScore);        
});

$('#crystal2').click(function(){
  currentScore = (crystal2 + currentScore);
   $('#yourScore').text("Total: "+ currentScore);        
});

$('#crystal3').click(function(){
  currentScore = (crystal3 + currentScore);
   $('#yourScore').text("Total: "+ currentScore);        
});

$('#crystal4').click(function(){
  currentScore = (crystal4 + currentScore);
   $('#yourScore').text("Total: "+ currentScore);        
});



///// if your score matches the current score to guess then return win, add win to wins variable/else return loss add to losses variable