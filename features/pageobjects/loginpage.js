const {$} = require("@wdio/globals"); 

const usernameTextbox = '#username';

class LoginPage{

    get passwordTextbox(){
        return $('#password');
    }

    get loginButton(){
        return $('button[type="submit');
    }

    get loginMessage(){
        return $('#flash');
    }

    async getUrl(){
        await browser.url('https://the-internet.herokuapp.com/login');
    }

    async enterCredentials(username,password){
        await $(usernameTextbox).setValue(username);
        await this.passwordTextbox.setValue(password);
    }

    async clickLoginBtn(){
        await this.loginButton.click();
    }

    async checkMessage(message){
        await expect(this.loginMessage).toHaveText(expect.stringContaining(message));
    }

}

module.exports = new LoginPage();