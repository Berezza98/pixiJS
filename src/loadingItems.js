import * as PIXI from "pixi.js";

export default class LoadingItems extends PIXI.Loader {
  constructor(app) {
    super();
  }

  loadImages(files) {
    const keys = Object.keys(files);
    keys.forEach(fileKey => {
      this.add(fileKey, files[fileKey]);
    });
    this.load();
    return this;
  }

  
}