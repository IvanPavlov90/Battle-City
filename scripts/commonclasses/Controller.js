export default class Controller {
  static initListeners(player) {
    document.addEventListener("keydown", (e) => {
      player.move(e.key);
    });
  }
}
