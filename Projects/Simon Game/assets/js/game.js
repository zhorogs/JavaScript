//Declare array for button colors;
const buttonColours = ["red", "blue", "green", "yellow"];

//Declare initial setup, variables and values;
let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;

//
$(document).keypress(function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

//Declare function on buttons with various settings;
$(".btn").click(function () {
  const userChosenColour = $(this).attr("id");
  //Push the new value into the array;
  userClickedPattern.push(userChosenColour);
  //Play sound for the chosen color;
  playSound(userChosenColour);
  //Animate the press for the chose colour;
  animatePress(userChosenColour);
  //Check the answer//
  checkAnswer(userClickedPattern.length - 1);
});


//Declare checkAnswer function;
function checkAnswer(currentLevel) {

  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    startOver();
  }
}

//Declare function for sequences;
function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

//Declare animation function for presses;
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

//Declare playsound function;
function playSound(name) {
  const audio = new Audio("assets/sounds/" + name + ".mp3");
  audio.play();
}

//Declare New Game function;
//Reset values;
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
