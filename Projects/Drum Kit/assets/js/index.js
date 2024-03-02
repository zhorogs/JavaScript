//Get number of drum buttons;
const numberOfDrumButtons = document.querySelectorAll(".drum").length;

//Loop through the number of buttons and attach eventListener, set functions makeSound and buttonAnimation;
for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    const buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

//Fetch pressed keys through the eventListener, so we can get the object for which key was pressed;
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

//Define makeSound function with a switch case, defining buttons, audio and attach play() method;
function makeSound(key) {
  switch (key) {
    case "w":
      const tom1 = new Audio("assets/sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      const tom2 = new Audio("assets/sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      const tom3 = new Audio("assets/sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      const tom4 = new Audio("assets/sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      const snare = new Audio("assets/sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      const crash = new Audio("assets/sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      const kick = new Audio("assets/sounds/kick-bass.mp3");
      kick.play();
      break;


    default: console.log(key);
  }
}

//Add animation for the pressed buttons;
function buttonAnimation(currentKey) {
  const activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
