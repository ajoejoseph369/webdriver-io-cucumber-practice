class LoginPage{

    get usernameTextbox(){
        return $('#username');
    }

    get passwordTextbox(){
        return $('#password');
    }

    get loginButton(){
        return $('button[type="submit');
    }

    get loginMessage(){
        return $('#flash');
    }

    async login(username,password){
        await this.usernameTextbox.setValue(username);
        await this.passwordTextbox.setValue(password);
        await this.loginButton.click();
    }

    async checkMessage(message){
        await expect(this.loginMessage).toHaveText(expect.stingContaining(message));
    }

}

module.exports = new LoginPage();