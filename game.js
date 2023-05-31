

var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var level = 0;
var started = false ;

$(".btn").click( function() {

var userChosenColour =$(this).attr("id");

 userClickedPattern.push(userChosenColour);

playSound(userChosenColour);
animatePress(userChosenColour);

checkAnswer(userClickedPattern.length -1);


});

$(document).keydown(function() {

  if(!started) {
   $("#level-title").text("Level " + level);
    nextSequence();
    started = true ;
  }

});

function checkAnswer(currentLevel) {

if(userClickedPattern[currentLevel]=== gamePattern[currentLevel] )  {

console.log("Success");

     if(userClickedPattern.length=== gamePattern.length){
      setTimeout( function () {
        nextSequence();
      } ,1000 );

     }

    } else {
  console.log("Wrong");

playSound("wrong");

$("#level-title").text("Game over, Press Any Key to Restart");

$("body").addClass("game-over");
setTimeout( function() {
  $("body").removeClass("game-over") ;
}, 200 );
     startOver();

  }
}


function startOver() {

gamePattern = [];
started = false ;
level = 0;

}


function nextSequence() {

userClickedPattern = [];

      level ++ ;
   $("#level-title").text("Level " + level);
  // level ++ ;
  var randomNumber = Math.floor(Math.random() *4);

  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

playSound(randomChosenColour);

}

function playSound(name){

  var audio = new Audio("sounds/" + name +".mp3");
   audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout( function() {
    $("#" + currentColour).removeClass("pressed") ;
  }, 100 );
}
