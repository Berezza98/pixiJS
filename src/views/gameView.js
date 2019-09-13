import * as PIXI from "pixi.js";
import LoadingItems from "../loadingItems";
import constants from "../config/constants";

export default class Game extends PIXI.Container {
  constructor(app, resources) {
    super();
    this.resources = resources;
    this.app = app;
  }

  setBackground() {
    const backgroundResource =
      this.resources[constants.IMAGE_ALIASES.BACKGROUND];
    const background = new PIXI.Sprite(backgroundResource.texture);
    this.addChild(background);
  }

}