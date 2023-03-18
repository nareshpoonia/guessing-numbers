console.log("JS is working");

let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");

const lastResult = document.querySelector(".lastResult");

const hint = document.querySelector(".hint");

const guess = document.querySelector(".guess");

const submitGuess = document.querySelector(".submitguess");

submitGuess.addEventListener("click", checkGuess);

let guessCount = 1;

let resetButton;

let userGuess = guess.value;

function checkGuess() {
  let userGuess = Number(guess.value);
  if (guessCount === 1) {
    guesses.textContent = "Previous Guess: ";
  }
  guesses.textContent += `${userGuess} `;
  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations";
    lastResult.style.color = "Green";
    hint.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "Game Over";
    lastResult.style.color = "Red";
    hint.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "Wrong !";
    lastResult.style.color = "Red";
    if (userGuess > randomNumber) {
      hint.textContent = "Your guess is too high";
    } else {
      hint.textContent = "Your guess is too low";
    }
  }
  guessCount++;
  guess.value = "";
  guesses.focus();
}

function setGameOver() {
  guesses.disabled = true;
  submitGuess.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new Game";
  document.body.append(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll(".resultParas p");
  for (const resetPara of resetParas) {
    resetPara.textContent = "";
  }
  resetButton.parentElement.removeChild(resetButton);
  guesses.disabled = false;
  submitGuess.disabled = false;
  guesses.value = "";
  guesses.focus();
  lastResult.style.color = "white";
  randomNumber = Math.floor(Math.random() * 100) + 1;
}
