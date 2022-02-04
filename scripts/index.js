import Controller from "./commonclasses/Controller.js";
import GameLoop from "./gameclasses/GameLoop.js";
import Player from "./gameclasses/Player.js";
import pictureLoader from "./utils/pictureLoader.js";

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

async function start() {
  const img = await pictureLoader("assets/main_asset.png");
  const player = new Player("player", 392, 584, 0, 0, 16, 16, 1);
  Controller.initListeners(player);
  const game = new GameLoop(player, img, context);
  game.animate();
}

start();
