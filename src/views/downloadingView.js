import * as PIXI from "pixi.js";
import LoadingItems from "../loadingItems";
import resources from "../config/resources";

export default class Downloading extends PIXI.Container {
  constructor(app) {
    super();
    this.app = app;
    this.loadingItems = new LoadingItems();
    this.text = new PIXI.Text(
      'Downloading...',
      {
        fontFamily : 'Arial',
        fontSize: 24,
        fill : 0xff1010,
        align : 'center'
      }
    );
  }

  loadAllImages() {
    const loader = this.loadingItems.loadImages(resources)
      loader.onComplete.add(() => {
        this.emit("loaded", loader);
      });
      loader.onError.add((e) => {
        this.emit("error", e);
      });
  }

  download() {
    this.alignCenter();
    this.addChild(this.text);
    this.loadAllImages();
  }

  alignCenter() {
    this.text.anchor.set(0.5);
    this.text.position.set(this.app.renderer.width / 2, this.app.renderer.height / 2);
  }
}