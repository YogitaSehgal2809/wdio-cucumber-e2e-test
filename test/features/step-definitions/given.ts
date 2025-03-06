import { Given } from "@wdio/cucumber-framework";
import * as _chai from "chai";

Given(/^User is logged in to Sauce demo website$/, async function (){
    // Login to Inventory app 
    await browser.url("https://www.saucedemo.com/")
    await browser.setTimeout({implicit:10000, pageLoad:10000})
    await browser.maximizeWindow()

    try {
        await $(`#user-name`).setValue(`standard_user`)
        await $(`#password`).setValue(`secret_sauce`)
        await $(`#login-button`).click()
    } catch (err) {
        console.log("Error in logging in, retrying..")
        // Refresh
        await browser.refresh()
        await browser.pause(2000)
        await $(`#user-name`).setValue(`standard_user`)
        await $(`#password`).setValue(`secret_sauce`)
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

    
})

