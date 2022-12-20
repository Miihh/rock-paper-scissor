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
let imagesContainer = document.getElementById("imagesContainer");
let imagezz = document.querySelectorAll(".img-sizes");
let imageArray = [];
let showArray = imageArray;
// images variables
let pwin1 = document.getElementById("pwin-1");
let pwin2 = document.getElementById("pwin-2");
let pdraw1 = document.getElementById("pdraw-1");
let pdraw2 = document.getElementById("pdraw-2");
let plose1 = document.getElementById("plose-1");
let plose2 = document.getElementById("plose-2");
let rwin1 = document.getElementById("rwin-1");
let rwin2 = document.getElementById("rwin-2");
let rlose1 = document.getElementById("rlose-1");
let rlose2 = document.getElementById("rlose-2");
let slose1 = document.getElementById("slose-1");
let slose2 = document.getElementById("slose-2");
let swin1 = document.getElementById("swin-1");
let swin2 = document.getElementById("swin-2");

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
    imageArray = [pwin2, rlose1];
    pwin2.style.display = "block";
    rlose1.style.display = "block";
  } else if (
    player1.textContent === hands[1] &&
    player2.textContent === hands[0]
  ) {
    player1.textContent = "Player 1 has:" + " " + hands[1];
    player2.textContent = "Player 2 has:" + " " + hands[0];
    result.textContent = "Player 1 wins. Paper beats Rock";
    console.log("Player 1 wins. Paper beats Rock");
    imageArray = [pwin1, rlose2];
    pwin1.style.display = "block";
    rlose2.style.display = "block";
  } else if (
    player1.textContent === hands[0] &&
    player2.textContent === hands[2]
  ) {
    player1.textContent = "Player 1 has:" + " " + hands[0];
    player2.textContent = "Player 2 has:" + " " + hands[2];
    result.textContent = "Player 1 wins. Rock beats Scissor";
    console.log("Player 1 wins. Rock beats Scissor");
    imageArray = [rwin1, slose2];
    rwin1.style.display = "block";
    slose2.style.display = "block";
  } else if (
    player1.textContent === hands[2] &&
    player2.textContent === hands[0]
  ) {
    player1.textContent = "Player 1 has:" + " " + hands[2];
    player2.textContent = "Player 2 has:" + " " + hands[0];
    result.textContent = "Player 2 wins. Rock beats Scissor";
    console.log("Player 2 wins. Rock beats Scissor");
    imageArray = [rwin2, slose1];
    rwin2.style.display = "block";
    slose1.style.display = "block";
  } else if (
    player1.textContent === hands[1] &&
    player2.textContent === hands[2]
  ) {
    player1.textContent = "Player 1 has:" + " " + hands[1];
    player2.textContent = "Player 2 has:" + " " + hands[2];
    result.textContent = "Player 2 wins. Scissor beats Paper";
    console.log("Player 2 wins. Scissor beats Paper");
    imageArray = [plose1, swin2];
    plose1.style.display = "block";
    swin2.style.display = "block";
  } else if (
    player1.textContent === hands[2] &&
    player2.textContent === hands[1]
  ) {
    player1.textContent = "Player 1 has:" + " " + hands[2];
    player2.textContent = "Player 2 has:" + " " + hands[1];
    result.textContent = "Player 1 wins. Scissor beats Paper";
    console.log("Player 1 wins. Scissor beats Paper");
    imageArray = [swin1, plose2];
    swin1.style.display = "block";
    plose2.style.display = "block";
  } else {
    player1.textContent = "Player 1 has:" + " " + player1.textContent;
    player2.textContent = "Player 2 has:" + " " + player2.textContent;
    result.textContent = "It's a draw!";
    console.log("It's a draw!");
    imageArray = [pdraw1, pdraw2];
    pdraw1.style.display = "block";
    pdraw2.style.display = "block";
  }

  playBtn.style.display = "none";
  stillInTheGame = false;
  restartBtn.style.display = "";
  console.log("THE PLAY FUNCTION HAS BEEN CALLED");
}

function restart() {
  play();
  
}
