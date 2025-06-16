Feature: Home Page of Sauce demo
@smoke @debug @demo
Scenario Outline: <TestID>: Validate number of products and their price in home page
Given Standard user is logged in to Sauce demo website
# data table
| userType | userName |
| standard| standard_user |
| problem | problem_user |
| performance | performance_glitch_user |

Then Inventory page should list <numberofproducts> products
Then Validate all products have a valid price>0
Examples:
            | TestID  | numberofproducts |
            | Invt_TC001 | 6 |