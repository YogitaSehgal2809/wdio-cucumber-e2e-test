import { Then } from "@wdio/cucumber-framework";
import * as chai from "chai";

Then(/^Inventory page should list (.*) products$/, async function(numberofproducts){
    // We need to check if the value in parameter is valid
    if(!numberofproducts) throw Error(`Invalid number provided ${numberofproducts}`)
    let prodArr=await $$(`.inventory_item`)
    // equal does === operation, compares value and type
    // data in feature file comes as string
    chai.expect(prodArr.length).to.be.equal(parseInt(numberofproducts))
    })

    Then(/^Validate all products have a valid price>0$/, async function(){
        let priceStrArr=[]
        let priceNumArr=[]
        // getting product price list
        
        let priceList=await $$(`.inventory_item_price`)
        for(let i=0;i<await priceList.length;i++)
        {
            let priceStr=await priceList[i].getText()
            priceStrArr.push(priceStr)
        }

        console.log(`Price with $ ${priceStrArr}`)

        // convert string to number and replace $
        // iterate through array perform an action and get a new array - map function
        // in place of parseInt or parseFloat , you can use unary +
        priceNumArr=priceStrArr.map(ele => +(ele.replace("$","")))
        console.log(`Price ${priceNumArr}`)

        // filter will filter value based on given condition
        let invalidPriceArr=priceNumArr.filter(ele=> ele<=0)
        chai.expect(invalidPriceArr.length).to.equal(0)

       
        })