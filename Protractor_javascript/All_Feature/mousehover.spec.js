const driver= require('Protractor');

describe("Mousehover",()=>{
    beforeAll(async()=>{
        await driver.browser.waitForAngularEnabled(false);
        await browser.get("https://www.flipkart.com/");
        await browser.sleep(5000);
    })
    it("Mousehover",async()=>{
        await element(by.buttonText('✕')).click();
        let Electronics = await element(by.xpath("//div[text()='Electronics']"));
        await browser.actions()
        .mouseMove(await Electronics.getWebElement())
        .perform();
        await browser.sleep(5000);
        await element(by.linkText('Powerbank')).click();
        await browser.sleep(1000);

    })
})