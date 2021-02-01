const driver= require('Protractor');

describe("Button validation",()=>{
    beforeAll(async()=>{
    await driver.browser.get("https://play.letcode.in/frame");
       await driver.browser.manage().window().maximize();
    })
    it('Simple frames',async()=>{
       await browser.switchTo().frame(0);
       await element(by.id("username")).sendKeys("yaswanth1");
       await browser.sleep(2000);
        
    })
    it('Enter username', async () => {
        
        await browser.switchTo().frame("myframe");
        
        await element(by.id("username")).sendKeys("admin")
    });
    it('Enter username', async () => {
        let frameElement = await element(by.xpath("//iframe[@src='/login']"));
        await browser.switchTo().frame(frameElement.getWebElement());
        await element(by.id("username")).sendKeys("admin")
    });
})