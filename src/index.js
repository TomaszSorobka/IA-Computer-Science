import Player from "./player";
import InputHandler from "./input";
let canvas = document.getElementById("gameScreen");

let ctx = canvas.getContext("2d");

ctx.fillStyle = "#00f";
ctx.fillRect(20, 20, 100, 100);

const GAME_WIDTH = 750;
const GAME_HEIGHT = 500;

let player = new Player(GAME_WIDTH, GAME_HEIGHT);

new InputHandler(player);

let lastTime = 0;

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  ctx.clearRect(0, 0, 750, 600);

  player.update(deltaTime);
  player.draw(ctx);

  requestAnimationFrame(gameLoop);
}

gameLoop();
