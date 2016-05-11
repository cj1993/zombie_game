function zombieComponent(x, y, width, height, color) {
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.update = function() {
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  this.towardsPlayer = function() {
    zombies[i].x > player.x ? zombies[i].x += -5 : zombies[i].x += 5;
    zombies[i].y > player.y ? zombies[i].y += -5 : zombies[i].y += 5;
  }
  this.attack = function(player) {
    var zombieLeft = this.x;
    var zombieRight = this.x + this.width;
    var zombieTop  = this.y;
    var zombieBottom = this.y + this.height;

    var playerLeft = player.x;
    var playerRight = player.x + player.width;
    var playerTop  = player.y;
    var playerBottom = player.y + player.height;

    var doesAttack = false;

    if (
        ((zombieRight >= playerLeft && zombieLeft <= playerRight) && (zombieBottom >= playerTop && zombieTop <= playerBottom)) ||
        ((zombieLeft <= playerRight && zombieRight >= playerLeft) && (zombieBottom >= playerTop && zombieTop <= playerBottom)) ||
        ((zombieBottom >= playerTop && zombieTop <= playerBottom) && (zombieRight >= playerLeft && zombieLeft <= playerRight)) ||
        ((zombieTop <= playerBottom && zombieBottom >= playerTop) && (zombieRight >= playerLeft && zombieLeft <= playerRight))
       ) {
         doesAttack = true;
       }

    return doesAttack;
  }
}

function createNewZombie() {
  var interval = 50;
  var x = Math.random() * myGameArea.canvas.width;
  var y = Math.random() * myGameArea.canvas.height;

  if (intervalRate(interval)) {
    zombies.push(new zombieComponent(x, y, 30, 30, "red"));
  }
}

function controlZombies() {
  for (i = 0; i < zombies.length; i++) {
    zombies[i].towardsPlayer();
    zombies[i].update();
    // if (i !== zombies.length - 1 && zombies[i].attack(player)) {
    if (zombies[i].attack(player)) {
      health += -5;
      if (health === 0) {
        myGameArea.stop();
      }
    }
  }
}
