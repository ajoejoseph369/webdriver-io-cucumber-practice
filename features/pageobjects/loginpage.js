const {$} = require("@wdio/globals"); 

const usernameTextbox = '#username';
const passwordTextbox = '#password';
const loginButton = 'button[type="submit';
const loginMessage = '#flash';

class LoginPage{

    async getUrl(){
        await browser.url('https://the-internet.herokuapp.com/login');
    }

    async enterCredentials(username,password){
        await $(usernameTextbox).setValue(username);
        await $(passwordTextbox).setValue(password);
    }

    async clickLoginBtn(){
        await $(loginButton).click();
    }

    async checkMessage(message){
        await expect($(loginMessage)).toHaveText(expect.stringContaining(message));
    }

}

module.exports = new LoginPage();