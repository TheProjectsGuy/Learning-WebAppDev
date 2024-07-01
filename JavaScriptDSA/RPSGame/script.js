let playerScore = 0;
let computerScore = 0;

// Elements
const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

// Game actions
function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  const optionIndex = Math.floor(Math.random() * options.length)
  return options[optionIndex]
}

function hasPlayerWonTheRound(player, computer) {
  return (
      (player == "Rock" && computer == "Scissors") ||
      (player == "Scissors" && computer == "Paper") ||
      (player == "Paper" && computer == "Rock")
  )
}

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();
  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore += 1
    return `Player wins! ${userOption} beats ${computerResult}`
  } else if (userOption === computerResult) {
    return `It's a tie! Both chose ${userOption}`
  } else {
    computerScore += 1
    return `Computer wins! ${computerResult} beats ${userOption}`
  }
}

function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption)
  playerScoreSpanElement.innerText = playerScore
  computerScoreSpanElement.innerText = computerScore
  if (playerScore === 3 || computerScore === 3) {
    winnerMsgElement.innerText = ((playerScore === 3) 
        ? "Player" : "Computer") + " has won the game!"
    optionsContainer.style.display = "none"
    resetGameBtn.style.display = "block"
  }
};

function resetGame() {
  playerScore = 0
  computerScore = 0
  playerScoreSpanElement.innerText = playerScore
  computerScoreSpanElement.innerText = computerScore
  resetGameBtn.style.display = "none"
  optionsContainer.style.display = "block"
  winnerMsgElement.innerText = ""
  roundResultsMsg.innerText = ""
}

resetGameBtn.addEventListener("click", resetGame);

rockBtn.addEventListener("click", function () {
  showResults("Rock");
});

paperBtn.addEventListener("click", function () {
  showResults("Paper");
});

scissorsBtn.addEventListener("click", function () {
  showResults("Scissors");
});
