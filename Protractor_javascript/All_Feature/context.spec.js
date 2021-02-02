const driver= require('Protractor');
describe(" come on web tables",()=>{
    beforeAll(async()=>{
        await driver.browser.waitForAngularEnabled(false);
        driver.browser.get("https://play.letcode.in/contextmenu");
        driver.browser.manage().window().maximize();
    })
    it('Tell me true table',async ()=>{
        let table=await $("table#table tbody");
        let count=await table.$$("tr").count();
        console.log(count);
        expect(count).toBe(3);
        for(let i=0;i>=count;i++){
           let firstID=await rows.get(i).$$('td');
           let firstData=await firstID.get(0);
           let text =await firstData.getText();
           console.log(text);
           if(text==="Yashwanth"){
               let checkbox=await firstID.last().$("input");
               await checkbox.click();
               await browser.sleep(2000);
           }
        }
await browser.sleep(3000);
    })
})