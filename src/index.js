import Player from "./player";
import InputHandler from "./input";
import Ib from "./ib";

let canvas = document.getElementById("gameScreen");

let ctx = canvas.getContext("2d");

ctx.fillStyle = "#00f";
ctx.fillRect(20, 20, 100, 100);

const GAME_WIDTH = 750;
const GAME_HEIGHT = 500;

let player = new Player(GAME_WIDTH, GAME_HEIGHT);
let ib = new Ib;

new InputHandler(player);

let lastTime = 0;





function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  player.update(deltaTime);
  player.draw(ctx);

  ib.draw(ctx);
  
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
