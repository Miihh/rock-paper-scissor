// rock, paper, scissors

let hands = ["rock", "paper", "scissor"];
let player1 = document.getElementById("rps-player1");
let player2 = document.getElementById("rps-player2");
let result = document.getElementById("rps-game-resultss");

function getHand() {
  let randomIndex = Math.floor(Math.random() * 3); //trebuie sa cream un index, randomIndex
  //  care va fi egal cu un numar, Math.random, dar numarul trebuie rotunjit fara zecinale, deci Math.floor
  // apoi, folosim numarul generat de randomIndex ca index al lui hands, pt ca va asocia nr generat cu unul dintre elementele arrayului
  return hands[randomIndex];
}

function getHand2() {
  let randomIndex = Math.floor(Math.random() * 3);
  return hands[randomIndex];
}

let hand1 = getHand();
let hand2 = getHand2();

function play() {
  player1.textContent = hand1;
  player2.textContent = hand2;

  if (player1.textContent === hands[0] && player2.textContent === hands[1]) {
    result.textContent = "Player 2 wins. Paper beats Rock";
    console.log("Player 2 wins. Paper beats Rock");
  } else if (
    player1.textContent === hands[1] &&
    player2.textContent === hands[0]
  ) {
    result.textContent = "Player 1 wins. Paper beats Rock";
    console.log("Player 1 wins. Paper beats Rock");
  } else if (
    player1.textContent === hands[0] &&
    player2.textContent === hands[2]
  ) {
    result.textContent = "Player 1 wins. Rock beats Scissor";
    console.log("Player 1 wins. Rock beats Scissor");
  } else if (
    player1.textContent === hands[2] &&
    player2.textContent === hands[0]
  ) {
    result.textContent = "Player 2 wins. Rock beats Scissor";
    console.log("Player 2 wins. Rock beats Scissor");
  } else if (
    player1.textContent === hands[1] &&
    player2.textContent === hands[2]
  ) {
    result.textContent = "Player 2 wins. Scissor beats Paper";
    console.log("Player 2 wins. Scissor beats Paper");
  } else if (
    player1.textContent === hands[2] &&
    player2.textContent === hands[1]
  ) {
    result.textContent = "Player 1 wins. Scissor beats Paper";
    console.log("Player 1 wins. Scissor beats Paper");
  } else {
    result.textContent = "It's a draw!";
    console.log("It's a draw!");
  }
}
// OR

//   if (hand1 === hands[0] && hand2 === hands[1]) {
//     console.log("Player 2 wins. Paper beats Rock");
//   } else if (hand1 === hands[1] && hand2 === hands[0]) {
//     console.log("Player 1 wins. Paper beats Rock");
//   } else if (hand1 === hands[0] && hand2 === hands[2]) {
//     console.log("Player 1 wins. Rock beats Scissor");
//   } else if (hand1 === hands[2] && hand2 === hands[0]) {
//     console.log("Player 2 wins. Rock beats Scissor");
//   } else if (hand1 === hands[1] && hand2 === hands[2]) {
//     console.log("Player 2 wins. Scissor beats Paper");
//   } else if (hand1 === hands[2] && hand2 === hands[1]) {
//     console.log("Player 1 wins. Scissor beats Paper");
//   } else {
//     console.log("It's a draw!");
//   }
// }
