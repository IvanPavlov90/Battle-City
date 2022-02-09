import Scene from "./gameclasses/Scene.js";
import pictureLoader from "./utils/PictureLoader.js";

async function start() {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  const img = await pictureLoader("assets/main_asset.png");
  const scene = new Scene("1", img, context);
  scene.init();
}

start();
