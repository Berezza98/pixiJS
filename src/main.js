import Application from "./application";

async function main() {
  const application = new Application();
  application.appendCanvas(".container");
  try {
    const { resources } = await application.showDownloadingView();
    application.showGameView(resources);
  } catch (e) {
    throw new Error(e);
  }

}

main();