'use strict';

//Show number for testing purposes;
//document.querySelector(".number").textContent = secretNumber;

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
//This is a state variable;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);

    if (!guess) {
        //Input number checks;
        //When there is no input/empty;
        //document.querySelector(".message").textContent = "No number!";
        displayMessage("No number!");
        //When input is greater than 20;
    } else if (guess > 20) {
        displayMessage("Please enter a number between 0 and 20!");
        //document.querySelector(".message").textContent = "Please enter a number between 0 and 20!";
        //When input is lower than 0;
    } else if (guess < 0) {
        displayMessage("Please enter a number between 0 and 20!")
        //document.querySelector(".message").textContent = "Please enter a number between 0 and 20!";
    }
    //When player guesses the correct number;
    else if (guess === secretNumber) {
        displayMessage("Correct Number!")
        //document.querySelector(".message").textContent = "Correct Number!";
        document.querySelector(".number").textContent = secretNumber;

        document.querySelector("body").style.backgroundColor = "#60b347";

        document.querySelector(".number").style.width = "30rem";

        if (score > highscore) {
            highscore = score;
        }

        document.querySelector(".highscore").textContent = highscore;

        //When guess is wrong;
    } else if (guess !== secretNumber) {
        if (score > 1) {
            //document.querySelector(".message").textContent = guess > secretNumber ? "Too high!" : "Too low!";
            displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            //document.querySelector(".message").textContent = "You lost the game!"\
            displayMessage("You lost the game!")
            document.querySelector(".score").textContent = 0;
        }
    }
    //Commented out and not using due to DRY principle. The following was implementated with ternary operator on line 53;
    //when guess is too high
    // } else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector(".message").textContent = "Too high!"
    //         score--;
    //         document.querySelector(".score").textContent = score;
    //     } else {
    //         document.querySelector(".message").textContent = "You lost the game!"
    //         document.querySelector(".score").textContent = 0;
    //     }
    //     //when guess is too low
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector(".message").textContent = "Too low!"
    //         score--;
    //         document.querySelector(".score").textContent = score;
    //     } else {
    //         document.querySelector(".message").textContent = "You lost the game!"
    //         document.querySelector(".score").textContent = 0;
    //     }
    // }
});

document.querySelector(".again").addEventListener("click", () => {
    //Implementing Again button, resetting variables and values;
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "#222";
    displayMessage("Start guessing...")
    // document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".guess").value = "";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".number").style.width = "15rem";
})

