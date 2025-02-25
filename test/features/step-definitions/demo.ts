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


Given(/^A web page is opened$/, async function(){
    await browser.url("/inputs")
    await browser.setTimeout({implicit:15000, pageLoad:10000})
    await browser.maximizeWindow()
   
})

When(/^Perform Web Interactions$/, async function(){
    let element=await $(`[type=number]`)
    let num=12345
    let strNum=num.toString()
    // adds the value after clearing the text field
    // await element.setValue(12345)
    
    // Used to pause
    // await browser.debug()

    // adds the value without clearing the text field
    // await element.addValue(12345)

    await element.click()
    for(let i=0;i<strNum.length;i++)
    {
        let charStr=strNum.charAt(i)
        await browser.pause(1000)
        await browser.keys(charStr)
    }

  })