import * as PIXI from "pixi.js";
import LoadingItems from "../loadingItems";

export default class Game extends PIXI.Container {
  constructor(app) {
    super();
    this.app = app;
    this.text = new PIXI.Text(
      'Downloading...',
      {
        fontFamily : 'Arial',
        fontSize: 24,
        fill : 0xff1010,
        align : 'center'
      }
    );
    this.images = {
      background: "./assets/background.jpg",
      backgroundPortrait: "./assets/background-portrait.jpg",
      buttonActive: "./assets/btn-active.png",
      buttonInactive: "./assets/btn-inactive.png",
      item1: "./assets/SYM1.png",
      item3: "./assets/SYM3.png",
      item4: "./assets/SYM4.png",
      item5: "./assets/SYM5.png",
      item6: "./assets/SYM6.png",
      item7: "./assets/SYM7.png",
    }
  }

  loadAllImages() {
    const loadingItems = new LoadingItems();
    loadingItems.loadImages(this.images)
      .onComplete.add(() => {
        this.emit("loaded");
      });
  }

  showDownloading() {
    this.alignCenter();
    this.addChild(this.text);
    this.loadAllImages();
  }

  alignCenter() {
    this.text.anchor.set(0.5);
    this.text.position.set();

    this.text.x = this.app.renderer.width / 2;
    this.text.y = this.app.renderer.height / 2;
  }
}