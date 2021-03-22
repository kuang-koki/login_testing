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
		browser.driver.sleep(3000);	

		//var EC = protractor.ExpectedConditions;
		var log_button = element(by.xpath('//ul[@class="menu-desktop d-lg-block d-md-none d-sm-none ng-tns-c117-0"]/li[@class="menu-item fullOpacity ng-tns-c117-0 ng-star-inserted"]/a'));
		//var isClickable = EC.elementToBeClickable(log_button);
		//browser.wait(isClickable, 5000);
		browser.actions().mouseMove(log_button).doubleClick().perform();
		

		browser.driver.sleep(8000);

		var login_window = element(by.tagName('app-iframe-dialog'));                                       
	
		expect(login_window.isPresent()).toBe(true);
		
	});


		



});