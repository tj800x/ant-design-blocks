const { runDevServer, killDevServer } = require('./devServer');
const puppeteer = require('puppeteer');
const path = require('path');

let browser = null;

const openBrowser = async () => {
  browser = await puppeteer.launch({
    headless: true,
    args: [
      '--disable-gpu',
      '--disable-dev-shm-usage',
      '--no-first-run',
      '--no-zygote',
      '--no-sandbox'
    ]
  });
};

const screenshot = async (blockName, blockDir, rootDir) => {
  const page = await browser.newPage();
  const imagePath = path.join(blockDir, 'snapshot.png');
  const devServerUrl = await runDevServer({
    cwd: rootDir,
    blockName
  });
  await page.goto(devServerUrl);
  await page.screenshot({
    path: imagePath
  });
  await killDevServer();
};

const closeBrowser = async () => {
  if (browser !== null) {
    browser.close();
  }
};

module.exports = { screenshot, openBrowser, closeBrowser };