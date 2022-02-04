import Player from "./Player.js";

export default class GameLoop {
  constructor(context, img) {
    this.context = context;
    this.img = img;
  }  

  gameProcess () {
    this.render();
    this.update();  
    window.requestAnimationFrame(this.gameProcess);
  }

  render() {
    const player = new Player("player", 392, 584, 0, 0, 16, 16, 1);
    player.draw(this.img, this.context);
  }

  update() {

  }
}
