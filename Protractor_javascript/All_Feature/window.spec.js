const driver= require('Protractor');
describe("windows testcase",()=>{
    
        beforeAll(async()=>{
            await driver.browser.waitForAngularEnabled(false);
            await driver.browser.get("https://the-internet.herokuapp.com/windows");
       
           
        })
        it("Hii windows",async()=>{
            let windows= await browser.getWindowHandle();
            console.log(windows);
            console.log(await browser.getTitle());
            await element(by.linkText('Click Here')).click();
            let windows1 = await browser.getAllWindowHandles();
            console.log(windows1);
            await browser.switchTo().window(windows1[1]);
            console.log(await browser.getTitle());
            browser.sleep(2000);
            
        })   

    })
