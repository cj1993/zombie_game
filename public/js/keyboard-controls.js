function playerKeyboardControls() {
  if (myGameArea.keys && myGameArea.keys[37]) { player.speedX = -7.5; }
  if (myGameArea.keys && myGameArea.keys[39]) { player.speedX = 7.5; }
  if (myGameArea.keys && myGameArea.keys[38]) { player.speedY = -7.5; }
  if (myGameArea.keys && myGameArea.keys[40]) { player.speedY = 7.5; }
}

