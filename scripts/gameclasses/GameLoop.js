export default class GameLoop {
  constructor(player, img, context, background) {
    this.player = player;
    this.img = img;
    this.context = context;
    this.animate = this.animate.bind(this);
    this.background = background;
  }

  animate() {
    this.render();
    this.update();
    window.requestAnimationFrame(this.animate);
  }

  render() {
    this.context.clearRect(0, 0, 800, 600);
    for (const block of this.background) {
      block.draw(this.img, this.context);
    }
    this.player.draw(this.img, this.context);
  }

  update() {}
}
