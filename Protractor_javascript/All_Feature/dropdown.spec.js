const driver= require('Protractor');
describe("Dropdown validation",()=>{
   
    it('Select the dropdown ',async()=>{
        await driver.browser.get("https://play.letcode.in/dropdown");
       await driver.browser.manage().window().maximize();
        await driver.element(driver.by.cssContainingText("option","Apple")).click();
        browser.sleep(2000);
    })
    it('automate the sematic UI ',async()=>{
        await browser.waitForAngularEnabled(false);
        await browser.get("https://semantic-ui.com/modules/dropdown.html");
        await driver.element(driver.by.className("ui selection dropdown")).click();
        await browser.sleep(2000);
        await driver.element(driver.by.cssContainingText('div.item','Male')).click();
        await browser.sleep(2000);
    })
})