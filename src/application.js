import * as PIXI from "pixi.js";
import DownloadingView from "./views/downloadingView";
import GameView from "./views/gameView";

export default class Application extends PIXI.Application {
  constructor(params) {
    const defaultParams = {
      width: 1280,
      height: 720
    };
    super(Object.assign({}, defaultParams, params));
    this.downloadingView = new DownloadingView(this);
  }

  appendCanvas(el) {
    document.querySelector(el).appendChild(this.view);
  }

  showDownloadingView() {
    return new Promise((resolve, reject) => {
      this.downloadingView.on("loaded", (loader) => {
        this.downloadingView.visible = false;
        resolve(loader);
      });
      this.downloadingView.on("error", (e) => {
        reject(e);
      });
      this.downloadingView.download();
      this.stage.addChild(this.downloadingView);
    });
  }

  showGameView(resources) {
    this.gameView = new GameView(this, resources);
    this.gameView.show();
    this.stage.addChild(this.gameView);
  }
}