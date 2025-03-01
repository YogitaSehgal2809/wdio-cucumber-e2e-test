Feature: Home Page of Sauce demo
@demo
Scenario Outline: Validate number of products and their price in home page
Given User is logged in to Sauce demo website
Then Inventory page should list <numberofproducts> products
Then Validate all products have a valid price>0 
Examples:
            | testID  | numberofproducts |
            | Invt_TC001 | 6 |