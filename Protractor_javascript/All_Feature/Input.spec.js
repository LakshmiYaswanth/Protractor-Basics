const driver= require('Protractor');

describe("Input validation",()=>{
    beforeAll(()=>{
        driver.browser.get("https://play.letcode.in/edit");
        driver.browser.manage().window().maximize();
    })
    it('Enter the text',()=>{
        driver.element(driver.by.id("fullName"))
        .sendKeys("Yaswanth Bollineni");
        driver.browser.sleep(3000);
    })
    it('Append a text and press keyboard tab',()=>{
        driver.element(driver.by.id("join"))
        .sendKeys("Yaswanth Bollineni",driver.protractor.Key.TAB);

    })
    it('get text',async ()=>{
       let getme = driver.element(driver.by.id("getMe"));
       let text= await getme.getAttribute("value");
       console.log(text);
    });
    it('Clear the text',()=>{
        driver.element(driver.by.id("clearMe"))
        .clear();
     })
     it('Confirm that edit field is disabled',async ()=>{
        let IsEnabled= await driver.element(driver.by.id("noEdit"))
        .isEnabled();
        console.log(IsEnabled);
        expect(IsEnabled).toBe(false);
     })

})