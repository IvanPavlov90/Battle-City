import GameLoop from "./gameclasses/GameLoop.js";
import pictureLoader from "./utils/pictureLoader.js";

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

async function start() {
  const img = await pictureLoader("assets/main_asset.png");
  const game = new GameLoop(context, img);
  game.gameProcess();
}

start();
