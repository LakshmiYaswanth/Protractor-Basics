const driver= require('Protractor');

describe("Button validation",()=>{
    beforeAll(async()=>{
    await driver.browser.get("https://play.letcode.in/alert");
       await driver.browser.manage().window().maximize();
    })
    it('Simple alert',async()=>{
       await driver.element(driver.by.id("12345rtf")).click();
       (await browser.switchTo().alert()).accept();
       await browser.sleep(2000);
        
    })
    it('Conform alert ',async()=>{
        await driver.element(driver.by.id("zxcvbnm")).click();
       (await browser.switchTo().alert()).accept();
       await browser.sleep(2000);
    })
    it('Prompt alert',async ()=>{
        await driver.element(driver.by.id("aswdefr")).click();

       let alert =await browser.switchTo().alert();
       await alert.sendKeys("yaswanth");
       await alert.accept();
       await browser.sleep(2000);
    });
    it('sweet alert',async ()=>{
        await driver.element(driver.by.id("zxcvbhnj")).click();
       await driver.element(driver.by.buttonText("OK")).click();
       await browser.sleep(2000);
     })
  
})