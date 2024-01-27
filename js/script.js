// Getting DOM elements
const displayPlayer = document.querySelector(".display__player");
const displayPC = document.querySelector(".display__pc");
const btns = document.querySelectorAll(".btns>button");
const winner = document.querySelector(".winner-text");
const playerScoreElemet = document.querySelector(".score__player-score");
const pcScoreElemet = document.querySelector(".score__pc-score");

// Init state
const items = ["paper", "rock", "scissors"];
let playerScore = 0;
let pcScore = 0;

// Functions
const randomChose = () => {
  let a = Math.floor(Math.random() * 3);
  return items[a];
};

// Create Player chose
function createPlayer(src) {
  displayPlayer.innerHTML = "";

  let imgDiv = document.createElement("img");
  imgDiv.classList = "chose display__player-chose";
  imgDiv.src = `img/${src}.svg`;

  displayPlayer.append(imgDiv);
}

// Create PC chose
function createPC(src) {
  displayPC.innerHTML = "";

  let imgDiv = document.createElement("img");
  imgDiv.classList = "chose display__pc-chose";
  imgDiv.src = `img/${src}.svg`;

  displayPC.append(imgDiv);
}

// Setting score
const scoreSet = () => {
  playerScoreElemet.textContent = playerScore;
  pcScoreElemet.textContent = pcScore;
};

// Show winner
function whoWins(player, pc) {
  let winnerName;
  if (player === pc) {
    winnerName = "Draw!";
  }
  if ((player === "rock" && pc === "scissors") || (player === "paper" && pc === "rock") || (player === "scissors" && pc === "paper")) {
    winnerName = "Player wins!";
    playerScore++;
  }
  if ((player === "rock" && pc === "paper") || (player === "paper" && pc === "scissors") || (player === "scissors" && pc === "rock")) {
    winnerName = "PC wins!";
    pcScore++;
  }

  winner.textContent = winnerName;
}

// Reset states
const resetAll = () => {
  playerScore = 0;
  pcScore = 0;
  winner.textContent = "Your turn!";

  scoreSet();
  createPlayer("player");
  createPC("pc");
};

// Events
btns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    let clickTarget = event.target.dataset.name;

    if (clickTarget === "reset") {
      resetAll();
    } else {
      const randomItem = randomChose();

      createPlayer(clickTarget);
      createPC(randomItem);

      whoWins(clickTarget, randomItem);
      scoreSet();
    }
  });
});
