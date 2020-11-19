var hypnoticBall, database;
var position;
var form , player , game;
var gameState = 0;
var playerCount = 0;

function setup(){
createCanvas(500,500);
database = firebase.database();
console.log(database);

game = new Game();
game.getGameState();
game.start();
}

function draw(){
background("white");
}
