function playerComponent(x, y, width, height, color) {
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
  this.move = function() {
    player.speedX = 0;
    player.speedY = 0;
    playerKeyboardControls();
    this.x += this.speedX;
    this.y += this.speedY;
    if (player.mapCollision(myGameArea.canvas)) {
      player.transport();
    }
  }
  this.mapCollision = function(map) {
    var mapLeft = 0;
    var mapRight = map.width;
    var mapTop = 0;
    var mapBottom = map.height;

    var playerLeft = this.x;
    var playerRight = this.x + this.width;
    var playerTop  = this.y;
    var playerBottom = this.y + this.height;

    var noCollision = true;

    if (playerRight < mapLeft || playerLeft > mapRight || playerBottom < mapTop || playerTop > mapBottom) {
      noCollision = false;
    }

    return noCollision;
  }
  this.transport = function() {
    // if (this.x < 0) { this.x = myGameArea.canvas.width - 10; }
    // if (this.y < 0) { this.y = myGameArea.canvas.height - 10; }
    // if (this.x > myGameArea.canvas.width - 10) { this.x = 0; }
    // if (this.y > myGameArea.canvas.height - 10) { this.y = 0; }
    if (this.x < 0) { this.x = 0; }
    if (this.y < 0) { this.y = 0; }
    if (this.x > myGameArea.canvas.width - 20) { this.x = myGameArea.canvas.width - 20; }
    if (this.y > myGameArea.canvas.height - 20) { this.y = myGameArea.canvas.height - 20; }
  }
}

