import Block from "./Block.js";

export default class Player extends Block {
  constructor(type, screenPositionX, screenPositionY, spritePositionX, spritePositionY, width, height, lives) {
    super(type, screenPositionX, screenPositionY, spritePositionX, spritePositionY, width, height);
    this.lives = lives;
  }

  move() {

  }
}
