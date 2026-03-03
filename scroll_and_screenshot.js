const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:8000/');
  await page.setViewport({ width: 1280, height: 1024 });
  
  // Scroll to the form
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });
  
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/tmp/reservation-form.png', fullPage: true });
  
  await browser.close();
})();
