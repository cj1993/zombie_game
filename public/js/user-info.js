function updateHealth() {
  if (health < 0) { health = 0; }
  document.getElementById("health").innerHTML = "Health: " + health;
}

function updateScore() {
  if (!localStorage["highScore"]) { localStorage["highScore"] = 0; }
  document.getElementById("highScore").innerHTML = "High Score: " + localStorage["highScore"];
  document.getElementById("score").innerHTML = "Score: " + myGameArea.frameNo;
}

function highScore(score) {
  if (!localStorage["highScore"]) { localStorage["highScore"] = 0; }
  if (score > localStorage["highScore"]) { localStorage["highScore"] = score + 1; }
  document.getElementById("highScore").innerHTML = "High Score: " + localStorage["highScore"];
}

