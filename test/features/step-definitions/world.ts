import { setWorldConstructor } from "@wdio/cucumber-framework";
import * as chai from "chai"

class CustomWorld{

    appId: String
    testId: String

    constructor(){
        this.appId=""
        this.testId=""
    }
}
setWorldConstructor(CustomWorld)