// Player name
var player1 = "Player 1";
var player2 = "Player 2";

// Function to change the player name
function editNames() {
  player1 = prompt("Change Player1 name");
  player2 = prompt("Change player2 name");

  document.querySelector("p.Player1").innerHTML = player1;

  document.querySelector("p.Player2").innerHTML = player2;
}

function rollTheDice() {
  setTimeout(function () {
    // Returns a random integer from 0 to 9:
    // Math.floor(Math.random() * 10);
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;

    //use this random number to select random dice img
    var randomDiceImage1 = "dice" + randomNumber1 + ".png"; //dice1.png -dice6.png

    //change attribute value (src) of image
    var randomImageSource1 = "images/" + randomDiceImage1;

    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomImageSource1);

    //FOR SECOND IMAGE
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomImageSource2);

    if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    } else if (randomNumber1 < randomNumber2) {
      document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    } else {
      document.querySelector("h1").innerHTML = "🏁 Draw!";
    }
  }, 25);
}

// // Returns a random integer from 0 to 9:
// // Math.floor(Math.random() * 10);
// var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// //use this random number to select random dice img
// var randomDiceImage1 = "dice" + randomNumber1 + ".png"; //dice1.png -dice6.png

// //change attribute value (src) of image
// var randomImageSource1 = "images/" + randomDiceImage1;

// var image1 = document.querySelectorAll("img")[0];
// image1.setAttribute("src", randomImageSource1);

// //FOR SECOND IMAGE
// var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
// var image2 = document.querySelectorAll("img")[1];
// image2.setAttribute("src", randomImageSource2);

// if (randomNumber1 > randomNumber2) {
//   document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
// } else if (randomNumber1 < randomNumber2) {
//   document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
// } else {
//   document.querySelector("h1").innerHTML = "🏁 Draw!";
// }
