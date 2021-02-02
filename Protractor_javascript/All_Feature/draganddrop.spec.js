const driver= require('Protractor');
describe("how to run this",()=>{
    beforeAll(async()=>{
        await driver.browser.get("https://play.letcode.in/aui");
        await driver.browser.manage().window().maximize();
    })
    afterEach(async()=>{
        await browser.sleep(2000);
    })
    it('Draganddrop',async()=>{
        let source= await element(by.id("draggable"));
        let target= await element(by.id("draggable"));
        browser.actions().dragAndDrop(await source.getWebElement(),await target.getWebElement()).perform();
        browser.sleep(3000)
    })
})