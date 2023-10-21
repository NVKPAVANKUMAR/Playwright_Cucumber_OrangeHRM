/**************************************************/
const { readFileSync } = require('fs');
/**  
* @author NVK PAVANKUMAR
*/

/**************************************************/

class LoginPage {
    async navigateToLoginScreen() {
        // Go to the application
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    async submitLoginForm() {
        // Login with valid credentials
        await page.fill('[name="username"]', readJson()['username'])
        await page.fill('[name="password"]', readJson()['password'])
        await page.click('.oxd-button')
    }

    async submitLoginWithParameters(username, password) {
        // Login with given credentials (Username and Password are coming from Feature file)
        await page.fill('[name="username"]', username)
        await page.fill('[name="password"]', password)
        await page.click('.oxd-button')
    }

    async assertUserIsLoggedIn() {
        // Assertion for an web element present on the Homepage (User comes at HomePage after successful login)
        await page.waitForSelector('[alt="client brand banner"]')
    }

    async pause() {
        // Wait for 3 seconds
        await page.waitForTimeout(3000)
    }


}

function readJson() {
    return JSON.parse(readFileSync('creds.json'));
}

module.exports = { LoginPage }