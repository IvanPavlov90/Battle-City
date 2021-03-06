export default class GameLoop {
  constructor(player, img, context) {
    this.player = player;
    this.img = img;
    this.context = context;
    this.animate = this.animate.bind(this);
  }

  animate() {
    this.render();
    this.update();
    window.requestAnimationFrame(this.animate);
  }

  render() {
    this.context.clearRect(0, 0, 800, 600);
    this.player.draw(this.img, this.context);
  }

  update() {}
}
