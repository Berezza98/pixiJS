// import * as PIXI from "pixi.js";

// const app = new PIXI.Application({
//   width: 800,
//   height: 600
// });

// document.body.appendChild(app.view);

// app.loader.add('ball', './assets/ball.png').load((loader, resources) => {
//   // This creates a texture from a 'bunny.png' image
//   const ball = new PIXI.Sprite(resources.ball.texture);
//   ball.interactive = true;
//   // ball.cursor = 'wait';
//   ball.click = () => console.log(ball);
//   ball.scale.x = 0.1;
//   ball.scale.y = 0.1;

//   // Setup the position of the bunny
//   ball.x = app.renderer.width / 2;
//   ball.y = app.renderer.height / 2;

//   // Rotate around the center
//   ball.anchor.x = 0.5;
//   ball.anchor.y = 0.5;

//   // Add the bunny to the scene we are building
//   app.stage.addChild(ball);

//   // Listen for frame updates
//   app.ticker.add(() => {
//        // each frame we spin the bunny around a bit
//       ball.rotation += 0.01;
//   });
// });

import Application from "./application";

const application = new Application({});
application.appendCanvas(".container");
application.showDownloadingView();