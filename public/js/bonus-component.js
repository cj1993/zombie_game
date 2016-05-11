function bonusComponent(x, y, width, height, color) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color;
  this.update = function() {
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  this.clearZombies = function() {
    // zombies.splice(0, zombies.length / 2);
    zombies = [];
  }
  this.extraHealth = function() {
    health += 250;
  }
  this.collision = function(player) {
    var bonusLeft = this.x;
    var bonusRight = this.x + this.width;
    var bonusTop  = this.y;
    var bonusBottom = this.y + this.height;

    var playerLeft = player.x;
    var playerRight = player.x + player.width;
    var playerTop  = player.y;
    var playerBottom = player.y + player.height;

    var gotBonus = false;

    if (
        ((bonusRight >= playerLeft && bonusLeft <= playerRight) && (bonusBottom >= playerTop && bonusTop <= playerBottom)) ||
        ((bonusLeft <= playerRight && bonusRight >= playerLeft) && (bonusBottom >= playerTop && bonusTop <= playerBottom)) ||
        ((bonusBottom >= playerTop && bonusTop <= playerBottom) && (bonusRight >= playerLeft && bonusLeft <= playerRight)) ||
        ((bonusTop <= playerBottom && bonusBottom >= playerTop) && (bonusRight >= playerLeft && bonusLeft <= playerRight))
       ) {
         gotBonus = true;
       }

    return gotBonus;
  }
}

function createNewBonus() {
  var interval = 250;
  var x = Math.random() * myGameArea.canvas.width;
  var y = Math.random() * myGameArea.canvas.height;

  if (everyInterval(interval)) {
    bonuses.push(new bonusComponent(x, y, 100, 100, "magenta"));
  }
}

function controlBonuses() {
  for (i = 0; i < bonuses.length; i++) {
    bonuses[i].update();
    if (bonuses[i].collision(player)) {
      myGameArea.frameNo % 2 === 0 ? bonuses[i].clearZombies() : bonuses[i].extraHealth();
      bonuses.splice(i, 1);
    }
  }
  if (Math.random() < 0.005) { bonuses = []; }
}
