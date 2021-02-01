const { browser } = require("protractor");

// spec.js
describe('Protractor Demo App', function() {
    it('should have a title', async ()=>{
      browser.get('http://juliemr.github.io/protractor-demo/');
      browser.sleep(2000);
      console.log( await browser.getTitle());
      expect(browser.getTitle()).toEqual('Super Calculator');
    });
  });