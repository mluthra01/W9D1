import MovingObject from "./movingObject.js";
import Asteroid from "./asteroid.js";
import Game from "./game.js";
import GameView from "./gameView.js";

window.MovingObject = MovingObject;

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
// canvas.width = Game.DIM_X;
// canvas.height = Game.DIM_Y;

// const mo1 = new MovingObject({
//     pos: [30, 30],
//     vel: [10, 10],
//     radius: 5,
//     color: "#00FF00"
// });

ctx.fillStyle = "BlueViolet"; 
ctx.fillRect(0, 0, 900, 1800);

// const ast1 = new Asteroid({ pos: [30, 30] });
// ast1.draw(ctx);

const testGame = new Game();

const newGame = new GameView(testGame, ctx);
newGame.start();
