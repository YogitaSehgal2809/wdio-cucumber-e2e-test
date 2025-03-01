import { Given, When, Then } from "@wdio/cucumber-framework";
import * as chai from "chai"

Given(/^A web page is opened$/, async function(){

    await browser.url("")
    await browser.setTimeout({implicit:15000, pageLoad:10000})
    await browser.maximizeWindow()
   
})

Then(/^Handle Alert$/, async function(){
    await browser.url("")
    let alertLink=await $(`=JavaScript Alerts`)
    await alertLink.click()

    // await browser.debug()
    let Alert=await $(`button=Click for JS Alert`)
    await Alert.click()
    await browser.pause(5000)
    if(await browser.isAlertOpen()){
        await browser.acceptAlert()
        // await browser.pause(5000)
    }
    else
    {
        console.log("NO JS alert")
    }
    
    const confirmButton = await $(`button=Click for JS Confirm`);
    await confirmButton.click();
    await browser.pause(5000);
    if (await browser.isAlertOpen()) {
    // let alertText = await browser.getAlertText();
    // console.log("Alert Text:", alertText);
    await browser.dismissAlert() 
    // await browser.pause(5000);
    //  or await browser.acceptAlert()
    } else {
        console.log("No Confirm alert is open");
    }
    

  

    let promptAlert=await $(`button=Click for JS Prompt`)
    await promptAlert.click()
    await browser.pause(5000)
    
    if(await browser.isAlertOpen()){
    //    let alertText=await browser.getAlertText()
    //    console.log(`alert text>> ${alertText}`)
       await browser.sendAlertText(`Hello JS`)
       await browser.acceptAlert()
    //    await browser.pause(5000);
    }
    else{
        console.log("No Prompt Alert")
    }

    let resultText=await $(`#result`).getText()
    console.log("Result Message:", resultText);


})

Then(/^Handle Login Alert$/, async function(){
    // providing username and password in URL
    await browser.navigateTo("https://admin:admin@the-internet.herokuapp.com/basic_auth")
    let confirmationText=await $(`//div[@class='example']/p`).getText()
    chai.expect(confirmationText).to.equal("Congratulations! You must have the proper credentials.")
    await browser.pause(5000)
})

Then(/^Handle File Upload$/, async function(){
     // await browser.url("")
     let fileUploadLink=await $(`=File Upload`)
     await fileUploadLink.click()
    // to get current working directory
    // console.log(process.cwd())
     let inputFile=await $(`#file-upload`)
    //  always provide absolute path while deailing with file upload
     await inputFile.addValue(`${process.cwd()}/data/fileUpload/dummy.txt`)
     let uploadFile=await $(`#file-submit`)
     await uploadFile.click()
    //  await browser.debug()
     let confirmationMessage=await $(`<h3>`).getText()
     chai.expect(confirmationMessage).to.equal(`File Uploaded!`)
   
})

Then(/^Handle Frames and use keyboard keys$/, async function(){
    // await browser.url("")

    let framesLink=await $(`=Frames`)
    await framesLink.click()

    let iframeLink=await $(`=iFrame`)
    await iframeLink.click()

    let textboxFrame=await $(`#mce_0_ifr`)
    await browser.switchToFrame(textboxFrame)

    

    let textboxElement=await $(`#tinymce`)
    await textboxElement.click()
    // clearing the text before entering text
    await browser.keys(["Meta","A"])
    await browser.keys("Delete")
    await textboxElement.addValue("Typing into the frame..")

    // switch back to parent frame
    await browser.switchToParentFrame()

    // await browser.debug()
  
})

Then(/^Perform Scrolling$/, async function(){
    // await browser.navigateTo(`https://www.amazon.com.au/`)
    let element=await $(`h2=New beats for summer`)
    await element.scrollIntoView(false)
    await browser.debug()
})

Then(/^Handle Windows$/, async function(){
    // await browser.url("")
    let multipleWindowsLink=await $(`=Multiple Windows`)
    await multipleWindowsLink.click()

    // click on link to open a new window
    let clickHereLink=await $(`=Click Here`)
    await clickHereLink.click()

    let elementalSeleniumLink=await $(`=Elemental Selenium`)
    await elementalSeleniumLink.click()

    // Check where is the cursor control after opening new windows
    // store parent window details
    let parentWindowTitle=await browser.getTitle()
    let parentWindowHandle=await browser.getWindowHandle()
    console.log(`current window title is ${parentWindowTitle}`)

    // get window handles of all currently opened windows
    let windowHandles=await browser.getWindowHandles()
    for(let i=0;i<windowHandles.length;i++)
    {
    await browser.switchToWindow(windowHandles[i])
    let currentWindowtitle=await browser.getTitle()
    console.log(`switched to ${currentWindowtitle}`)
    // switch to a particular window and perform actions
    if(currentWindowtitle==='Home | Elemental Selenium')
    {
        await browser.switchToWindow(windowHandles[i])
        let currentWindowHeaderText=await $(`<h1>`).getText()
        console.log(currentWindowHeaderText)
        // list of actions to be performed after switching
        break
    }
 }
// switching back to parent window after performing actions in desired window
await browser.switchToWindow(parentWindowHandle)
let parentWindowHeaderText=await $(`<h3>`).getText()
console.log(`Switched back to parent window ${parentWindowHeaderText}`)

// if switch to window does not work use
// browser.switchWindow(windowHandle)


})

Then(/^Perform Textbox Interactions$/, async function(){
    // syntax to select link text
   
    await browser.url("")
    let inputs=await $(`=Inputs`)
    await inputs.click()

    let textboxElement=await $(`[type=number]`)
    let num=12345
    let strNum=num.toString()

    // clears the text field and sets the value
    // await element.setValue(12345)
    
    // Used to pause
    // await browser.debug()

    // sets the value without clearing the text field
    // await element.addValue(12345)

    // clicking and adding the characters one by one
    await textboxElement.click()
    for(let i=0;i<strNum.length;i++)
    {
        let charStr=strNum.charAt(i)
        await browser.pause(1000)
        await browser.keys(charStr)
    }


  })


  Then(/^Perform Checkbox Interactions$/, async function(){
    await browser.url("")
    let checkboxesLink=await $(`=Checkboxes`)
    await checkboxesLink.click()

    let checkbox1=await $(`//form[@id='checkboxes']/input[1]`)
    let checkbox2=await $(`//form[@id='checkboxes']/input[2]`)
    let checkbox1IsChecked=await checkbox1.isSelected()
    let checkbox2IsChecked=await checkbox2.isSelected()
    chai.expect(checkbox1IsChecked).to.be.false
    console.log(checkbox1IsChecked)
    console.log(checkbox2IsChecked)
    // select an element
    if(!checkbox1IsChecked)
        { await checkbox1.click()
        }
    if(!checkbox2IsChecked)
   { await checkbox2.click()
   }
   await browser.pause(5000)
//    assert if element is selected or not
    chai.expect(checkbox2IsChecked).to.be.true

    // select all if they are not selected
    let checkboxesArr=await $$(`//form[@id='checkboxes']/input`)
    for(let i=0;i<await checkboxesArr.length;i++){
        let checkbox=checkboxesArr[i]
        if(!checkbox.isSelected())
            { await checkbox.click()
            }
            else{
                console.log( `checkbox ${i+1} is already selected`)
            }

    }

    

  })

  Then(/^Perform Dropdown Interactions$/, async function(){
    
    // asserting default option in dropdown
    await browser.url("")
    let Dropdown=await $(`=Dropdown`)
    await Dropdown.click()

    let selectedOption=await $(`//select/option[@selected='selected']`)
    let defaultOption=await selectedOption.getText()
    // console.log(defaultOption)
    chai.expect(defaultOption).to.equal("Please select an option")
    // await browser.debug()

    // clicking an element in dropdown
    let dropdownElement=await $(`#dropdown`)
    await dropdownElement.selectByAttribute("value","1")
    await browser.pause(5000)
    await dropdownElement.selectByVisibleText("Option 2")
    await browser.pause(5000)
    await dropdownElement.selectByIndex(1)
    await browser.pause(5000)

    // Get all dropdown options and check if it is as per business rules
    let dropdownOptions= await $$(`select>option`)
    // array declaration
    let arr=[]
    for(let i=0;i<await dropdownOptions.length;i++){
        arr.push(await dropdownOptions[i].getText()) 
    }
    console.log(`Dropdown Options >> ${arr}` )

  })