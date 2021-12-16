// This was used to test Week 29 setting-up-stripe_starter

const puppeteer = require('puppeteer');

(async() => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 1600});
  await page.goto('http://localhost:3000');
  await page.click('#restaurantButton1')
  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();
