// importing the default base config file
import { config as baseConfig} from "../wdio.conf.ts";
// Copying environment specific configuration to base configuration
export const config=Object.assign(baseConfig,{
    // key value pairs specific to test environment
    environment: "TEST",
    url: "https://www.saucedemo.com"
})