// Const random numbers 1 to 6;
const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;

//Randomize dice images;
const randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
const randomImageSource = "assets/img/" + randomDiceImage; //images/dice1.png - images/dice6.png
const randomImageSource2 = "assets/img/dice" + randomNumber2 + ".png";

//Set images for the dices;
const image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);
const image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);


//If player 1 wins;
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
//If player 2 wins;
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
//If it is draw;
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
