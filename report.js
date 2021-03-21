//report
[15:42:28] I/launcher - Running 1 instances of WebDriver
[15:42:28] I/hosted - Using the selenium server at http://localhost:4444/wd/hub
Started
[15:42:33] W/element - more than one element found for locator By(css selector, .agree-consent) - the first result will be used
[32m.[0m[31mF[0m

Failures: 
1) CGM_CLICKDOC_application_Testing click profile-button and check
  Message:
[31m    Failed: element not interactable
      (Session info: chrome=89.0.4389.90)
    Build info: version: '3.141.59', revision: 'e82be7d358', time: '2018-11-14T08:25:53'
    System info: host: 'KXF-PC', ip: '192.168.253.1', os.name: 'Windows 7', os.arch: 'amd64', os.version: '6.1', java.version: '1.8.0_74'
    Driver info: driver.version: unknown[0m
  Stack:
    WebDriverError: element not interactable
      (Session info: chrome=89.0.4389.90)
    Build info: version: '3.141.59', revision: 'e82be7d358', time: '2018-11-14T08:25:53'
    System info: host: 'KXF-PC', ip: '192.168.253.1', os.name: 'Windows 7', os.arch: 'amd64', os.version: '6.1', java.version: '1.8.0_74'
    Driver info: driver.version: unknown
        at Object.checkLegacyResponse (C:\Users\kxf\AppData\Roaming\npm\node_modules\protractor\node_modules\selenium-webdriver\lib\error.js:546:15)
        at parseHttpResponse (C:\Users\kxf\AppData\Roaming\npm\node_modules\protractor\node_modules\selenium-webdriver\lib\http.js:509:13)
        at C:\Users\kxf\AppData\Roaming\npm\node_modules\protractor\node_modules\selenium-webdriver\lib\http.js:441:30
        at processTicksAndRejections (internal/process/task_queues.js:97:5)
    From: Task: WebElement.click()
        at thenableWebDriverProxy.schedule (C:\Users\kxf\AppData\Roaming\npm\node_modules\protractor\node_modules\selenium-webdriver\lib\webdriver.js:807:17)
        at WebElement.schedule_ (C:\Users\kxf\AppData\Roaming\npm\node_modules\protractor\node_modules\selenium-webdriver\lib\webdriver.js:2010:25)
        at WebElement.click (C:\Users\kxf\AppData\Roaming\npm\node_modules\protractor\node_modules\selenium-webdriver\lib\webdriver.js:2092:17)
        at actionFn (C:\Users\kxf\AppData\Roaming\npm\node_modules\protractor\built\element.js:89:44)
        at Array.map (<anonymous>)
        at C:\Users\kxf\AppData\Roaming\npm\node_modules\protractor\built\element.js:461:65
        at ManagedPromise.invokeCallback_ (C:\Users\kxf\AppData\Roaming\npm\node_modules\protractor\node_modules\selenium-webdriver\lib\promise.js:1376:14)
        at TaskQueue.execute_ (C:\Users\kxf\AppData\Roaming\npm\node_modules\protractor\node_modules\selenium-webdriver\lib\promise.js:3084:14)
        at TaskQueue.executeNext_ (C:\Users\kxf\AppData\Roaming\npm\node_modules\protractor\node_modules\selenium-webdriver\lib\promise.js:3067:27)
        at C:\Users\kxf\AppData\Roaming\npm\node_modules\protractor\node_modules\selenium-webdriver\lib\promise.js:2927:27Error
        at ElementArrayFinder.applyAction_ (C:\Users\kxf\AppData\Roaming\npm\node_modules\protractor\built\element.js:459:27)
        at ElementArrayFinder.<computed> [as click] (C:\Users\kxf\AppData\Roaming\npm\node_modules\protractor\built\element.js:91:29)
        at ElementFinder.<computed> [as click] (C:\Users\kxf\AppData\Roaming\npm\node_modules\protractor\built\element.js:831:22)
        at UserContext.<anonymous> (C:\Users\kxf\Desktop\CGM\automatictesting\login_testing\spec.js:27:218)
        at C:\Users\kxf\AppData\Roaming\npm\node_modules\protractor\node_modules\jasminewd2\index.js:112:25
        at new ManagedPromise (C:\Users\kxf\AppData\Roaming\npm\node_modules\protractor\node_modules\selenium-webdriver\lib\promise.js:1077:7)
        at ControlFlow.promise (C:\Users\kxf\AppData\Roaming\npm\node_modules\protractor\node_modules\selenium-webdriver\lib\promise.js:2505:12)
        at schedulerExecute (C:\Users\kxf\AppData\Roaming\npm\node_modules\protractor\node_modules\jasminewd2\index.js:95:18)
        at TaskQueue.execute_ (C:\Users\kxf\AppData\Roaming\npm\node_modules\protractor\node_modules\selenium-webdriver\lib\promise.js:3084:14)
        at TaskQueue.executeNext_ (C:\Users\kxf\AppData\Roaming\npm\node_modules\protractor\node_modules\selenium-webdriver\lib\promise.js:3067:27)
    From: Task: Run it("click profile-button and check") in control flow
        at UserContext.<anonymous> (C:\Users\kxf\AppData\Roaming\npm\node_modules\protractor\node_modules\jasminewd2\index.js:94:19)
    From asynchronous test: 
    Error
        at Suite.<anonymous> (C:\Users\kxf\Desktop\CGM\automatictesting\login_testing\spec.js:21:2)
        at Object.<anonymous> (C:\Users\kxf\Desktop\CGM\automatictesting\login_testing\spec.js:2:1)
        at Module._compile (internal/modules/cjs/loader.js:1133:30)
        at Object.Module._extensions..js (internal/modules/cjs/loader.js:1153:10)
        at Module.load (internal/modules/cjs/loader.js:977:32)
        at Function.Module._load (internal/modules/cjs/loader.js:877:14)

2 specs, 1 failure
Finished in 5.637 seconds

[15:42:36] I/launcher - 0 instance(s) of WebDriver still running
[15:42:36] I/launcher - chrome #01 failed 1 test(s)
[15:42:36] I/launcher - overall: 1 failed spec(s)
[15:42:36] E/launcher - Process exited with error code 1
