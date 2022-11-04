"use strict";

let secret = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = Number(document.querySelector(".score").textContent);

document.querySelector(".check").addEventListener("click", function () {
  if (!document.querySelector(".guess").value) {
    document.querySelector(".message").textContent = "⛔ No Number";
  } else {
    if (secret !== Number(document.querySelector(".guess").value)) {
      score -= 1;
      if (score <= 0) {
        document.querySelector(".message").textContent =
          "🙈 You lost the game!";
        document.querySelector(".score").textContent = 0;
      } else {
        document.querySelector(".message").textContent =
          secret < Number(document.querySelector(".guess").value)
            ? "📈 Too High"
            : "📉 Too Low";
        document.querySelector(".score").textContent = score;
      }
    }

    if (secret === Number(document.querySelector(".guess").value)) {
      document.querySelector(".message").textContent = "🎉 You won";
      if (highscore < score) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
      }
      document.querySelector(".highscore").textContent = highscore;
      document.querySelector(".number").textContent = secret;
      document.querySelector("body").style.backgroundColor = "green";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".guess").value = "";
  secret = Math.trunc(Math.random() * 20) + 1;
  console.log(secret);
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
});
