import * as PIXI from "pixi.js";
import LoadingItems from "../loadingItems";
import constants from "../config/constants";

export default class Game extends PIXI.Container {
  constructor(app, resources) {
    super();
    this.resources = resources;
    this.app = app;
    this.fruitItems = [];
    this.radius = 250;
    this.speed = 3;
  }

  setBackground() {
    const backgroundResource =
      this.resources[constants.IMAGE_ALIASES.BACKGROUND];
    const background = new PIXI.Sprite(backgroundResource.texture);
    this.addChild(background);
  }

  addButton() {
    let buttonActive = true;
    const activeButtonResource =
      this.resources[constants.IMAGE_ALIASES.BUTTON_ACTIVE];
    const inactiveButtonResource =
      this.resources[constants.IMAGE_ALIASES.BUTTON_INACTIVE];
    let button = new PIXI.Sprite(activeButtonResource.texture);
    button.on("click", () => {
      if (buttonActive) {
        buttonActive = false;
        button.texture = inactiveButtonResource.texture;
        this.startSpin();
        setTimeout(() => {
          button.texture = activeButtonResource.texture;
          this.stopSpin();
          buttonActive = true;
        }, 2000);
      }
    });
    button.interactive = true;
    button.anchor.set(0.5);
    button.position.set(this.app.renderer.width / 2, this.app.renderer.height / 2);
    this.addChild(button);
  }

  addImages() {
    let images = [
      constants.IMAGE_ALIASES.ITEM2,
      constants.IMAGE_ALIASES.ITEM3,
      constants.IMAGE_ALIASES.ITEM4,
      constants.IMAGE_ALIASES.ITEM5,
      constants.IMAGE_ALIASES.ITEM6,
    ]
    for (let i = 0; i < images.length; i++){
      let f = 2 / images.length * i * Math.PI;
      let left = this.radius * Math.sin(f);
      let top = this.radius * Math.cos(f);
      let imgResource = this.resources[[images[i]]];
      const img = new PIXI.Sprite(imgResource.texture);
      img.f = f;
      this.fruitItems.push(img);
      img.anchor.set(0.5);
      img.position.set(this.app.renderer.width / 2 + left, this.app.renderer.height / 2 + top);
      this.addChild(img);
    }
  }

  startSpin() {
    this.spin = this.spin.bind(this)
    this.app.ticker.add(this.spin);
  }

  spin() {
    this.fruitItems.forEach(element => {
      element.f -= this.speed * Math.PI / 180;
      element.position.set(
        this.app.renderer.width / 2 + this.radius * Math.sin(element.f),
        this.app.renderer.height / 2 + this.radius * Math.cos(element.f)
      );
    });
  }

  stopSpin() {
    this.app.ticker.remove(this.spin);
  }

  show() {
    this.setBackground();
    this.addButton();
    this.addImages();
  }
}