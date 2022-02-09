export default class Controller {
  static keyPress = "";

  static initListeners(player) {
    document.addEventListener("keydown", (e) => {
      if (
        !this.keyPress &&
        (e.key === "w" || e.key === "s" || e.key === "d" || e.key === "a")
      ) {
        this.keyPress = e.key;
        player.move(this.keyPress);
      } else {
        player.move(this.keyPress);
      }
    });
    document.addEventListener("keyup", (e) => {
      if (e.key === "w" || e.key === "s" || e.key === "d" || e.key === "a") {
        this.keyPress = "";
      }
    });
  }
}
