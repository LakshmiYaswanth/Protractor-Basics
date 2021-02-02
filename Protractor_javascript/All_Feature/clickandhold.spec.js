const driver= require('Protractor');
describe("Click and Hold",()=>{
    beforeAll(async()=>{
        await driver.browser.waitForAngularEnabled(false);
        await browser.get("http://jsfiddle.net/LysCF/13/");
    })
    it("Click and Hold",async()=>{
      await browser.switchTo().frame('result');
      let ele=await element(by.className("hold_trigger"));
      await browser.actions()
      .mouseDown(await ele.getWebElement())
      .perform();
    })
})