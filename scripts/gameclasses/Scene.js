import Controller from "../commonclasses/Controller.js";
import { store } from "../gamedata/LevelStore.js";
import Block from "./Block.js";
import GameLoop from "./GameLoop.js";
import Player from "./Player.js";

export default class Scene {
  constructor(level, img, context) {
    this.level = level;
    this.img = img;
    this.context = context;
    this.background = new Set();
  }

  initLevel() {
    const level = store[this.level];
    for (const key in level["background"]) {
      for (
        let x = level["background"][key][1];
        x < level["background"][key][2];
        x += 16
      ) {
        for (
          let y = level["background"][key][3];
          y < level["background"][key][4];
          y += 16
        ) {
          this.background.add(new Block(level["background"][key][0], x, y, level["background"][key][5], level["background"][key][6], 16, 16));
        }
      }
    }
  }

  init() {
    this.initLevel();
    const player = new Player("player", 392, 584, 0, 0, 16, 16, 1);
    Controller.initListeners(player);
    const game = new GameLoop(player, this.img, this.context, this.background);
    game.animate();
  }
}
