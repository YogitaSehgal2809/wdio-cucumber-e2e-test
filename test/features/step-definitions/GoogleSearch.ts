import { Given, When, Then } from "@wdio/cucumber-framework";
import * as chai from "chai"

Given(/^Google page is opened$/, async function(){
    await browser.url("https://www.google.com/")
   
})

When(/^Search with (.*)$/, async function(SearchItem){
    // console.log(`>>searchItem: ${SearchItem} `)
    let searchBox=  $(`[name="q"]`)
    await searchBox.setValue(SearchItem)
    let googlesearch=$('[value="Google Search"]')
    await googlesearch.click()
    await browser.keys('Enter')


    })

Then(/^Click on first search result$/,async function(){
await browser.pause(10000)   
let element= $(`<h3>`)
await element.click()

})

Then(/^The URL should match with (.*)$/,async function(expectedURL){
    console.log(`expected URL: ${expectedURL}`);
    let actualUrl=await browser.getUrl()
    console.log(actualUrl);
    chai.expect(actualUrl).to.equal(expectedURL)

})


