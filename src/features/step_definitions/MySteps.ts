import {Given, Then, When} from 'cucumber'

Given(/^a variable set to (\d+)$/, (value: any) => {
    console.log("Given")
});
When(/^I increment the variable by (\d+)$/, (value: any) => {
    console.log("When")
});
Then(/^the variable should contain (\d+)$/, (value: any) => {
    console.log("Then")
});
