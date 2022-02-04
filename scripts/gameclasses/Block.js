export default class Block {
  constructor(type, screenPositionX, screenPositionY, spritePositionX, spritePositionY, width, height) {
    this.type = type;
    this.screenPositionX = screenPositionX;
    this.screenPositionY = screenPositionY;
    this.spritePositionX = spritePositionX;
    this.spritePositionY = spritePositionY;
    this.width = width;
    this.height = height;
  }

  draw(img, context) {
    context.drawImage(img, this.spritePositionX, this.spritePositionY, this.width, this.height, this.screenPositionX, this.screenPositionY, this.width, this.height);
  }
}
