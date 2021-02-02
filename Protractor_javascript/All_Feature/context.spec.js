const driver= require('Protractor');
describe(" come on context button",()=>{
    beforeAll(async()=>{
        await driver.browser.get("https://play.letcode.in/contextmenu");
        await driver.browser.manage().window().maximize();
    })
    it("Validate protractor",async()=>{
        let btn= await element(by.css('app-context-menu button'));
        await browser.actions()
        .click(await btn.getWebElement(),protractor.Button.RIGHT)
        .perform();
        await element(by.xpath("//button[text()='Click me']")).click();
        let alert=await browser.switchTo().alert();
        await alert.accept();
        await browser.sleep(3000);

    })
})


