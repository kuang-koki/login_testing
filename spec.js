//Login Testing
describe('CGM_CLICKDOC_application_Testing', function(){

	
	
	

	

	it('Switch to URL of Application', function(){

		browser.ignoreSynchronization = true;
		browser.get('https://demo.clickdoc.de/');
		browser.driver.sleep(1000);		
		var betätigen_btn = element(by.className('accept-gdpr-consent')).element(by.className('agree-consent'));
		betätigen_btn.click();
		expect(browser.getTitle()).toEqual('CLICKDOC - Arzttermine online buchen & Gesundheits-Apps');
		expect(browser.getCurrentUrl()).toEqual('https://demo.clickdoc.de/cd-de/');
	});

	it('click profile-button and check',function(){

		browser.ignoreSynchronization = true;
		browser.get('https://demo.clickdoc.de/cd-de/search');
		browser.driver.sleep(1000);	

		element(by.xpath('//a[@angularticsaction="Open login iframe"]/span[@class="bold-menu-text ng-tns-c117-0"]')).click();

		

		browser.driver.sleep(5000);

		var Close_Icon = element(by.css('login-iframe')).element(by.css('iframe-dialog-close'));                                       
	
		expect(Close_Icon.isPresent()).toBe(true);
		
	});


		



});