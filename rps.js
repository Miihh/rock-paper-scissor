// rock, paper, scissors

let hands = ["ROCK", "PAPER", "SCISSOR"];
let player1 = document.getElementById("rps-player1");
let player2 = document.getElementById("rps-player2");
let contentDiv = document.getElementById("rps-game");
let result = document.getElementById("rps-game-resultss");
let playBtn = document.getElementById("rps-btn");
let restartBtn = document.getElementById("restart-btn");
let stillInTheGame = true;
let p1image = document.getElementById("image-1");
let p2image = document.getElementById("image-2");

restartBtn.style.display = "none";
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

function play() {
  player1.textContent = getHand();
  player2.textContent = getHand2();
  // nu mai salvam rezultatul functiilor getHand si getHand2 in variabile, pentru ca raman setate pe
  // rezultatele generate la prima apelare, deci nu va merge functia de reapelare a celor 2 functii mentionate anterior

  if (player1.textContent === hands[0] && player2.textContent === hands[1]) {
    player1.textContent = "Player 1 has:" + " " + hands[0];
    player2.textContent = "Player 2 has:" + " " + hands[1];
    result.textContent = "Player 2 wins. Paper beats Rock";
    console.log("Player 2 wins. Paper beats Rock");
    document.getElementById("pwin-2").style.display = "block";
    document.getElementById("rlose-1").style.display = "block";
  } else if (
    player1.textContent === hands[1] &&
    player2.textContent === hands[0]
  ) {
    player1.textContent = "Player 1 has:" + " " + hands[1];
    player2.textContent = "Player 2 has:" + " " + hands[0];
    result.textContent = "Player 1 wins. Paper beats Rock";
    console.log("Player 1 wins. Paper beats Rock");
    document.getElementById("pwin-1").style.display = "block";
    document.getElementById("rlose-2").style.display = "block";
  } else if (
    player1.textContent === hands[0] &&
    player2.textContent === hands[2]
  ) {
    player1.textContent = "Player 1 has:" + " " + hands[0];
    player2.textContent = "Player 2 has:" + " " + hands[2];
    result.textContent = "Player 1 wins. Rock beats Scissor";
    console.log("Player 1 wins. Rock beats Scissor");
    document.getElementById("rwin-1").style.display = "block";
    document.getElementById("slose-2").style.display = "block";
  } else if (
    player1.textContent === hands[2] &&
    player2.textContent === hands[0]
  ) {
    player1.textContent = "Player 1 has:" + " " + hands[2];
    player2.textContent = "Player 2 has:" + " " + hands[0];
    result.textContent = "Player 2 wins. Rock beats Scissor";
    console.log("Player 2 wins. Rock beats Scissor");
    document.getElementById("rwin-2").style.display = "block";
    document.getElementById("slose-1").style.display = "block";
  } else if (
    player1.textContent === hands[1] &&
    player2.textContent === hands[2]
  ) {
    player1.textContent = "Player 1 has:" + " " + hands[1];
    player2.textContent = "Player 2 has:" + " " + hands[2];
    result.textContent = "Player 2 wins. Scissor beats Paper";
    console.log("Player 2 wins. Scissor beats Paper");
    document.getElementById("plose-1").style.display = "block";
    document.getElementById("swin-2").style.display = "block";
  } else if (
    player1.textContent === hands[2] &&
    player2.textContent === hands[1]
  ) {
    player1.textContent = "Player 1 has:" + " " + hands[2];
    player2.textContent = "Player 2 has:" + " " + hands[1];
    result.textContent = "Player 1 wins. Scissor beats Paper";
    console.log("Player 1 wins. Scissor beats Paper");
    document.getElementById("swin-1").style.display = "block";
    document.getElementById("plose-2").style.display = "block";
  } else {
    player1.textContent = "Player 1 has:" + " " + player1.textContent;
    player2.textContent = "Player 2 has:" + " " + player2.textContent;
    result.textContent = "It's a draw!";
    console.log("It's a draw!");
    document.getElementById("pdraw-1").style.display = "block";
    document.getElementById("pdraw-2").style.display = "block";
  }

  playBtn.style.display = "none";
  stillInTheGame = false;
  restartBtn.style.display = "";
}
// trebuie adaugate conditii pentru draw( paper draw, rock draw si scissor draw) ca sa afiseze imaginile corespunzatoare

function restart() {
  contentDiv.textContent = play();
}
