import pictureLoader from "./utils/pictureLoader.js";

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

async function start() {
    const picture = await pictureLoader("assets/main_asset.png");
    console.log(picture);
}

start();