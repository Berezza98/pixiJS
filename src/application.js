import * as PIXI from "pixi.js";
import Downloading from "./views/downloading";
import Game from "./views/game";

export default class Application {
  constructor(params) {
    let defaultParams = {
      width: 1280,
      height: 720
    };
    this.app = new PIXI.Application(
      Object.assign({}, defaultParams, params)
    );
  }

  appendCanvas(el) {
    document.querySelector(el).appendChild(this.app.view);
  }

  showDownloadingView() {
    const downloading = new Downloading(this.app);
    downloading.on("loaded", () => {
      downloading.visible = false;
    });
    downloading.showDownloading();
    this.app.stage.addChild(downloading);
  }
}