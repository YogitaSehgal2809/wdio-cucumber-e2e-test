import { Given } from "@wdio/cucumber-framework";
import * as _chai from "chai";

Given(/^User is logged in to Sauce demo website$/, async function (){
    // Login to Inventory app 
    await browser.url("https://www.saucedemo.com/")
    await browser.setTimeout({implicit:15000, pageLoad:10000})
    await browser.maximizeWindow()

    await $(`#user-name`).setValue(`standard_user`)
    await $(`#password`).setValue(`secret_sauce`)
    await $(`#login-button`).click()
    // await browser.debug()

    
})

