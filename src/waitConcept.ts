import { chromium, Dialog, expect, Locator, Page } from "@playwright/test";

(async () => {
    const browser = await chromium.launch({ channel: 'chrome', headless: false });


    let page: Page = await browser.newPage();
    page.setDefaultTimeout(10000);//imp wait - global wait 

    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register", {
        timeout: 5000
    });

    //10 secs -- 2 secs = 8 secs cancelled

    // let firstname: Locator = page.locator(`#input-firstname11`); //no error in case of wrong locator
    // firstname.click({ timeout: 5000 });
    //actions: auto wait will be applied
    //click
    //fill
    //hover
    //textcontent
    //check

    //pw will follow this sequence:
    //dom loaded -> loaded on the page
    //--> visible on the page
    //--> stable on the page
    //--> enable
    //clickable

    // await firstname.fill('testing'); //error will be thrown -
    //Timeout 10000ms exceeded.
    //  - waiting for locator

    //no need to write the wait if we are performing any action on the locator

    //
    //explicit wait in PW; dynamic wait : for a specific locator
    //
    // firstname.waitFor({ state: 'visible', timeout: 5000 });
    // firstname.fill('Naveen');

    //fill the reg form: success messg on the page.
    //await page.locator('#successmesg').waitFor({ state: 'visible', timeout: 5000 });

    //assertions in pw: using expect : default auto wait
    //    expect(page.locator(`#successmesg)).toBeVisible();


    //wait for Selector from page lib:
    //legacy + not a good practice to use
    //only xpath/css/text/htmltag
    (await page.waitForSelector('#input-firstname')).fill('Testing');

    //waitFor() --> locator -- any kind of locators - pw=semantic roles
    //waitForSelector() --> page --only for xpath/css

    //its only for the page loading concept:
    page.waitForLoadState("load"); //page is fully loaded
    page.waitForLoadState("domcontentloaded") ////DOM is fully loaded
    page.waitForLoadState("networkidle"); //network api are done

    //dialog, popup
    // page.waitForEvent()
    //download, popup, dialog, worker,  frameattached, framedetached, framenavigated, request, response, websocket, close, console 
    // Start waiting for download before clicking. Note no await.
    const downloadPromise = page.waitForEvent('download');
    await page.getByText('Download file').click();
    const download = await downloadPromise;

    // Wait for a popup
    const popup = await page.waitForEvent('popup');

    // Wait for a console message
    const consoleMsg = await page.waitForEvent('console');
    console.log(consoleMsg.text());

    // Wait for a network request
    const request = await page.waitForEvent('request');
    console.log(request.url());

    // Wait for a dialog
    const dialog = await page.waitForEvent('dialog');
    await dialog.dismiss();


    //wait for url:
    //page.waitForURL('url value');

    await page.click('a.delayed-navigation'); // Clicking the link will indirectly cause a navigation
    await page.waitForURL('**/target.html', { waitUntil: 'load' });

    //waitForFunction(3000);//static wait - bad practice
    await page.waitForFunction(() => document.querySelector('#status')?.textContent === 'Ready');

    //I use waitForFunction when I need to wait for a custom condition, like a text change, 
    // a global variable being set, or a spinner disappearing.

    // Wait until the submit button is enabled
    await page.waitForFunction(() => {
        const btn = document.querySelector('#submit');
        return btn && !btn.hasAttribute('disabled');
    }, { timeout: 5000 });

    // Wait until a global variable is set
    await page.waitForFunction(() => (window as any).dataLoaded === true);

    // Wait until a list has at least 10 items
    await page.waitForFunction(() => {
        return document.querySelectorAll('.list-item').length >= 10;
    });

    // Wait until the status element's text becomes "Completed"
    await page.waitForFunction(() => {
        const statusEl = document.querySelector('#status');
        return statusEl?.textContent === 'Completed';
    }, { timeout: 5000 });

    // Wait until a global JS variable is set to true
    await page.waitForFunction(() => (window as any).appReady === true, { timeout: 10000 });

    // Wait until the loading spinner is removed from the DOM
    await page.waitForFunction(() => !document.querySelector('.loading-spinner'), { timeout: 8000 });

    //waitForRequest & waitForResponse
    //https://www.youtube.com/watch?v=pL0PUFdCg6w
    //waitForRequest(3000);//static wait - bad practice
    await page.waitForRequest('**/api/login');
    await page.waitForRequest(request => request.url().includes('/api/data') && request.method() === 'POST');

    // Start waiting for request before clicking. Note no await.
    const requestPromise = page.waitForRequest('https://example.com/resource');
    await page.getByText('trigger request').click();
    const request1 = await requestPromise;

    // Alternative way with a predicate. Note no await.
    const requestPromise1 = page.waitForRequest(request =>
        request.url() === 'https://example.com' && request.method() === 'GET',
    );
    await page.getByText('trigger request').click();
    const request2 = await requestPromise;

    //realtime example
    //waiting for add to cart api call response after clicking on add to cart button 
    // before proceeding to checkout page on cliking on checkout
    //bcz checkout page needs cart data to load the page properly
    //bcz chckout api dependent on cart api and in realtime always one api call is dependent on another api call
    //bcz of network latency issues sometimes cart api response is delayed
    //bcz of this wait we are able to avoid flaky issues in the test
    //if we not wait for cart api response chances are there cart data is not loaded properly before loading checkout page
    await page.getByText('Add to Cart').click();
    await page.waitForResponse(response => response.url().includes('/cart/add') && response.status() === 200);
    await page.getByText('Checkout').click();


    //waitForResponse(3000);//static wait - bad practice
    await page.waitForResponse(response => response.url().includes('/api/data') && response.status() === 200);

    // Start waiting for response before clicking. Note no await.
    const responsePromise = page.waitForResponse('https://example.com/resource');
    await page.getByText('trigger response').click();
    const response = await responsePromise;

    // Alternative way with a predicate. Note no await.
    const responsePromise1 = page.waitForResponse(response =>
        response.url() === 'https://example.com' && response.status() === 200
        && response.request().method() === 'GET'
    );

    //diff waitForRequest & waitForResponse
    //waitForRequest: wait for the network request to be sent from the browser to the server
    //waitForResponse: wait for the network response to be received from the server to the browser


    // 1. page.waitForRequest()
    //     - Purpose: Waits until a specific network request is made.
    //     - Trigger Point: As soon as the browser sends the request.
    //     - Usage: Helpful when you want to verify that a request was initiated(e.g., an API call or resource fetch)
    // 2. page.waitForResponse()
    //     - Purpose: Waits until a specific network response is received.
    //     - Trigger Point: When the browser receives the response from the server.
    //     - Usage: Useful when you need to ensure that a request has completed and you want to validate the response data or status.

    
})();
