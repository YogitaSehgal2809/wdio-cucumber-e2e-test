import { Given } from "@wdio/cucumber-framework";
import * as _chai from "chai";

Given(/^(.*) user is logged in to Sauce demo website$/, async function (userType, dataTable){
    let dt=dataTable.hashes()
    // console.log(`The type of data table is ${typeof dt}`);
    // console.log(`The type of data table constructor is ${typeof dt.constructor()}`);
    // console.log(`The values in data table are ${JSON.stringify(dt)}`);

    // Login to Inventory app 
    // console.log(`Test username>> ${process.env.TEST_USERNAME}`)
    // console.log(`User type is ${userType}`)
    // @ts-ignore
    await browser.url(browser.options.url)
    // console.log(`Test config values>> ${JSON.stringify(browser.options)}`);
    await browser.setTimeout({implicit:10000, pageLoad:10000})
    await browser.maximizeWindow()

    try {
        await $(`#user-nam`).setValue(dt[0].userName)
        
        // await $(`#user-nam`).setValue(process.env.TEST_USERNAME)
        await $(`#password`).setValue(process.env.TEST_PASSWORD)
        await $(`#login-button`).click()
    } catch (err) {
        // console.log("Error in logging in, retrying..")
        // Refresh
        await browser.refresh()
        await browser.pause(2000)
        await $(`#user-name`).setValue(dt[0].userName)
        
        // await $(`#user-name`).setValue(process.env.TEST_USERNAME)
        await $(`#password`).setValue(process.env.TEST_PASSWORD)
        await $(`#login-button`).click()
        
    }

    // Back and forward
    await browser.back()
    await browser.pause(2000)
    await browser.forward()
    // await browser.debug()

    // Reload
    // Login with another user
    // await browser.pause(2000)
    // await browser.reloadSession()
    // await browser.url("https://www.saucedemo.com/")
    // await $(`#user-name`).setValue(`problem_user`)
    // await $(`#password`).setValue(`secret_sauce`)
    // await $(`#login-button`).click()
    // await browser.debug()

    // setting world object value
    let appId='ABC123'
    this.appId=appId

    
})

