import Block from "./Block.js";

export default class Player extends Block {
  constructor(
    type,
    screenPositionX,
    screenPositionY,
    spritePositionX,
    spritePositionY,
    width,
    height,
    lives
  ) {
    super(
      type,
      screenPositionX,
      screenPositionY,
      spritePositionX,
      spritePositionY,
      width,
      height
    );
    this.lives = lives;
  }

  draw(img, context, spritePositionX = 0, spritePositionY = 0) {
    context.drawImage(
      img,
      spritePositionX,
      spritePositionY,
      this.width,
      this.height,
      this.screenPositionX,
      this.screenPositionY,
      this.width,
      this.height
    );
  }

  move(key) {
    switch (key) {
      case "w":
        if (this.screenPositionY > 0) {
          this.screenPositionY = this.screenPositionY - 2;
        }
        break;
      case "a":
        if (this.screenPositionX > 0) {
          this.screenPositionX = this.screenPositionX - 2;
        }
        break;
      case "d":
        if (this.screenPositionX < 784) {
          this.screenPositionX = this.screenPositionX + 2;
        }
        break;
      case "s":
        if (this.screenPositionY < 584 ) {
          this.screenPositionY = this.screenPositionY + 2;
        }
        break;
      default:
        break;
    }
  }
}
