const rollBtn = document.querySelector(".btn-roll");
const holdBtn = document.querySelector(".btn-hold");
const newBtn = document.querySelector(".btn-new-game");
let player0 = document.querySelector(".player-0");
let player1 = document.querySelector(".player-1");
let score0 = document.querySelector(".score-0");
let score1 = document.querySelector(".score-1");
let current0 = document.querySelector(".current-score-0");
let current1 = document.querySelector(".current-score-1");
let diceImg = document.querySelector("img");

/////// start condition ::

let score, activePlayer, totalScores, isPlaying;

function newGame() {
  score0.textContent = 0;
  score1.textContent = 0;
  diceImg.classList.add("hidden");
  score = 0;
  activePlayer = 0;
  totalScores = [0, 0];
  isPlaying = true;
  player0.classList.add("active");
  player1.classList.remove("active");
  player0.classList.remove("winner");
  player1.classList.remove("winner");
  document.querySelector(".current-score-0").textContent = 0;
  document.querySelector(".current-score-1").textContent = 0;
}
newGame();

// let score = 0;
// let activePlayer = 0;
// const totalScores = [0, 0];
// let isPlaying = true;
// console.log(isPlaying);

function switchPlayer() {
  console.log("switch");
  score = 0;
  document.querySelector(`.current-score-${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle("active");
  player0.classList.toggle("active");
}

///// roll functionnality ::

rollBtn.addEventListener("click", function () {
  if (isPlaying) {
    const diceNumber = Math.trunc(Math.random() * 6) + 1; //// 1 ==>

    //// u.u.i ==>
    diceImg.src = `dice-${diceNumber}.png`;
    diceImg.classList.remove("hidden");
    if (diceNumber !== 1) {
      // score = score + diceNumber
      score += diceNumber;
      document.querySelector(`.current-score-${activePlayer}`).textContent =
        score;
    } else {
      switchPlayer();
    }
  }
});

////// hold functionnality ::

holdBtn.addEventListener("click", function () {
  if (isPlaying) {
    // totalScores[activePlayer] =totalScores[activePlayer] + score
    totalScores[activePlayer] += score;
    ////u.u.i ==>
    document.querySelector(`.score-${activePlayer}`).textContent =
      totalScores[activePlayer];
    if (totalScores[activePlayer] >= 20) {
      isPlaying = false;
      console.log(isPlaying);
      document.querySelector(`.player-${activePlayer}`).classList.add("winner");
    } else {
      switchPlayer();
    }
  }
});

////// new game functionnality ::

newBtn.addEventListener("click", newGame);
