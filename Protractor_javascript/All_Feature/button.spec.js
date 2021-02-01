const driver= require('Protractor');

describe("Button validation",()=>{
    beforeAll(async()=>{
    await driver.browser.get("https://play.letcode.in/button");
       await driver.browser.manage().window().maximize();
    })
    it(' get text',async()=>{
       let getText =await driver.element(driver.by.id("button1")).getText();
        console.log(getText);
    })
    it('Position ',async()=>{
       let location =await driver.element(driver.by.id("button2")).getLocation();
       console.log(location.x,location.y);
    })
    it('Primary colour',async ()=>{
       let color = await driver.element(driver.by.className("btn btn-primary")).getCssValue();
       console.log(color);
    });
    it('Clear the text',async ()=>{
        let size = await driver.element(driver.by.id("button4")).getSize();
       console.log(size.height,size.width);
     })
  
})