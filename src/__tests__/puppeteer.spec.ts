
jest.setTimeout(60000);
beforeEach(async () => {
  // await launch({
  //   headless : false
  // });
  // await browser.newPage();
  // await page.waitFor(1000);
  await page.goto("http://cdm.exem-oss.org/#/");
  await page.setViewport({width: 1920, height: 1300});
});

describe("Puppeteer", () => {
  it("페이지에 접속할 수 있다", async done => {
    await page.screenshot({ path: "./screenshot.png" });

    const inputIDSelector =
      "body > div > div.pcm-login-main-container-center > div.pcm-login-wrapper > div.pcm-login-wrapper-trapezoid > div > div.login-box > form > div.username-box > div > input";
    const inputPWSelecotr =
      "body > div > div.pcm-login-main-container-center > div.pcm-login-wrapper > div.pcm-login-wrapper-trapezoid > div > div.login-box > form > div.password-box > div.password-input-wrapper > input";

    // await page.type(inputIDSelector, process.env.ID as string);
    await page.type(inputPWSelecotr, process.env.PW as string);

    console.log(process.env.PW);

    await page.screenshot({ path: "./screenshot.png" });

    const loginBtn =
      "body > div > div.pcm-login-main-container-center > div.pcm-login-wrapper > div.pcm-login-wrapper-trapezoid > div > div.login-box > form > div.login-btn-box";
    await page.click(loginBtn);
    await page.screenshot({ path: "./screenshot.png" });

    await page.waitFor(3000);
    // await page.waitForNavigation();
    await page.screenshot({ path: "./screenshot.png" });
    done();
  });
});
