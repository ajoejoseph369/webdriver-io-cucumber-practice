const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/loginpage.js');

Given(/^user is on login page$/, async () => {
    // await browser.url('https://the-internet.herokuapp.com/login');
    await LoginPage.getUrl();
});

When(/^user enters (.*) and (.*)$/, async (username,password) => {
    // await $('#username').setValue(username);
    // await $('#password').setValue(password);
    await LoginPage.enterCredentials(username,password);
});

When(/^clicks on login button$/, async () => {
    // await $('button[type="submit"]').click();
    await LoginPage.clickLoginBtn();
});

Then(/^this (.*) is displayed$/, async (message) => {
    // await expect($('#flash')).toHaveText(expect.stringContaining(message));
    await LoginPage.checkMessage(message);
});
