const driver= require('Protractor');

describe("Mousehover",()=>{
    beforeAll(async()=>{
        //await driver.browser.waitForAngularEnabled(false);
        await browser.get("https://play.letcode.in/aui");
        await browser.sleep(5000);
    })
    it("Mousehover",async()=>{
        let sachin=await element(by.xpath("//li[contains(text(),'Sachin')]"));
        let ganguly=await element(by.xpath("//li[contains(text(),'Ganguly')]"));
        let gambir=await element(by.xpath("//li[contains(text(),'Gambir')]"));
        await browser.actions()
        .sendKeys(protractor.Key.CONTROL)
        .click(await sachin.getWebElement())
        .click(await ganguly.getWebElement())
        .click(await gambir.getWebElement())
        .perform();

    })
})