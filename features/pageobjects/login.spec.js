
describe('Demo Tests', async () => {
    it('Login Test', async () => {
        browser.url('https://the-internet.herokuapp.com/login');

        await $('#username').setValue('tomsmith');
        await $('#password').setValue('SuperSecretPassword!');
        await $('button[type="submit"]').click();
    });
});