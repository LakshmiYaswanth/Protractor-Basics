const driver= require('Protractor');

describe("draggable",()=>{
    beforeAll(async()=>{
        await driver.browser.waitForAngularEnabled(false);
        await browser.get("https://jqueryui.com/draggable/");
    })
    it("Draggable",async()=>{
        await driver.browser.switchTo().frame(0);
        let src = await element(by.id("draggable"));
        let locationX = (await src.getLocation()).x;
        let locationY = (await src.getLocation()).y;
        await browser.actions().dragAndDrop(
        await src.getWebElement(),
            {
                x: locationX + 30,
                y: locationY + 50
            }
        ).perform();
        browser.sleep(900)
    })
})