var colors = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"];
var player;
var bonus;
var health = 250;
var zombies = [];
var bonuses = [];

function changeColor() {
  bodyChoice = Math.floor(Math.random() * colors.length);
  canvasChoice = Math.floor(Math.random() * colors.length);
  document.body.style.background = colors[bodyChoice];
  myGameArea.canvas.style.background = colors[canvasChoice];
};

function highScoreEpilepsy() {
 var intScore = parseInt(document.getElementById("score").innerHTML.split(": ")[1]);
 var intHighScore = parseInt(document.getElementById("highScore").innerHTML.split(": ")[1]);
  if (intScore > intHighScore) { changeColor(); }
}

function startGame() {
  myGameArea.start();
  player = new playerComponent(myGameArea.canvas.width / 2, myGameArea.canvas.height / 2, 20, 20, "lime");
}

var myGameArea = {
  canvas: document.createElement("canvas"),
  start: function () {
    this.canvas.width = window.innerWidth - 100;
    this.canvas.height = window.innerHeight - 100;
    this.context = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);
    this.frameNo = 0;
    window.addEventListener("keydown", function(e) {
      myGameArea.keys = (myGameArea.keys || []);
      myGameArea.keys[e.keyCode] = true;
    })
    window.addEventListener("keyup", function(e) {
      myGameArea.keys[e.keyCode] = false;
    })
    this.interval = setInterval(updateGameArea, 20);
  },
  clear: function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  stop: function() {
    highScore(myGameArea.frameNo);
    clearInterval(this.interval);
  }
}

function everyInterval(n) {
  return !!((myGameArea.frameNo % n) === 0);
}

function intervalRate(n) {
  return !!((myGameArea.frameNo / n) % 1 === 0);
}

function updateGameArea() {
  myGameArea.clear();
  createNewZombie();
  controlZombies();
  myGameArea.frameNo++;
  player.move();
  player.update();
  updateScore();
  updateHealth();
  createNewBonus();
  controlBonuses();
  highScoreEpilepsy();
}
