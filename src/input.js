export default class InputHandler {
  constructor(player) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 87:
          player.moveUp();
          break;

        case 65:
          player.moveLeft();
          break;

        case 68:
          player.moveRight();
          break;

        case 83:
          player.moveDown();
          break;
      }
    });

    document.addEventListener("keyup", event => {
      switch (event.keyCode) {
        case 87:
          if (player.speedy < 0) player.stopy();
          break;

        case 65:
          if (player.speedx < 0) player.stopx();
          break;

        case 68:
          if (player.speedx > 0) player.stopx();
          break;

        case 83:
          if (player.speedy > 0) player.stopy();
          break;
      }
    });
  }
}
