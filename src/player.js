export default class Player {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    this.width = 50;
    this.height = 80;

    this.jumping = true;

    this.maxSpeed = 7;
    this.speedx = 0;
    this.speedy = 0;

    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - this.height - 10
    };
  }
  // MOVING SECTION ***************************
  moveUp() {
    this.speedy = -this.maxSpeed;
  }

  moveRight() {
    this.speedx = this.maxSpeed;
  }

  moveLeft() {
    this.speedx = -this.maxSpeed;
  }

  moveDown() {
    this.speedy = this.maxSpeed;
  }

  stopy() {
    this.speedy = 0;
  }

  stopx() {
    this.speedx = 0;
  }
  draw(ctx) {
    ctx.fillStyle = "#0ff";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(deltaTime) {
    

    this.position.y += this.speedy;
    this.position.x += this.speedx;

    if (this.position.y < 0) this.position.y = 0;
    if (this.position.x < 0) this.position.x = 0;
    if (this.position.x + this.width > this.gameWidth)
      this.position.x = this.gameWidth - this.width;
    if (this.position.y + this.height > this.gameHeight)
      this.position.y = this.gameHeight - this.height;
  }
}
