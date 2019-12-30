const { Given, Then } = require('cucumber');
const { By } = require('selenium-webdriver');
var assert = require("chai").assert;
const World = require('../support/world');
const Selectors = require('../support/utils/selectors');
var {When} = require('cucumber');

Given(/^I go to the jobs page$/, () => World.goToJobsPage());

Then(/^I should see the navigation bar$/, () => {
  return World.driver.findElement(By.id(Selectors.primaryNav)).getText()
      .then((NavigationLinks)=>{
         assert('Home\n' +
             'Find a job\n' +
             'Job alerts\n' +
             'Search recruiters\n' +
             'Jobs blog'+NavigationLinks);
  });
});
Given(/^User can see job page title$/,function () {
  return World.driver.getTitle().then((value => {
    //assert.equal(value,"economist Job page");
  })).catch(function (err) {
    console.log('Any Error',err)
  });
});
When(/^I click on SignIn link$/, function () {
    return World.driver.findElement(By.css(Selectors.SignIn)).click();
});
Then(/^I can see SignIn page$/, function () {
    return World.driver.findElement(By.css(Selectors.SignInPageHeader)).getText().then((header)=>{
      assert.equal(header,"Sign in")
    })
});
Then(/^I click on Home link$/, function () {
    return World.driver.findElement(By.css(Selectors.HomeLink)).click();
});
When(/^I click on CreateAccount link$/, function () {
    return World.driver.findElement(By.css(Selectors.createAccount));
});
Then(/^I can see Create Account page$/, function () {
  return World.driver.findElement(By.css(Selectors.CreateAccountHeader)).getText().then((header)=>{
    assert.equal(header,"Create an account")
  })
});
Given(/^I click on "([^"]*)" sector$/, function (sector) {
  return World.driver.findElement(By.css(Selectors.FinanceSector)).click();
});
Then(/^I wait (\d+) seconds$/, function (seconds) {
  return World.driver.sleep(1000*seconds);
});
Then(/^I can see "([^"]*)" heading$/, function (financeHeading) {
  return World.driver.findElement(By.id(Selectors.FinanceHeading)).getText().then(heading=>{
    assert.equal(heading,'Banking and finance jobs');
  })
});