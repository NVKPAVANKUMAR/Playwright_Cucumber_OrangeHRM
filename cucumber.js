/**************************************************/

/**  
* @author NVK PAVANKUMAR
* https://www.linkedin.com/in/rajat-v-3b0685128/
* https://github.com/rajatt95
* https://rajatt95.github.io/ 
*  
* Course: Automated Software Testing with Playwright (https://www.udemy.com/course/automated-software-testing-with-playwright/)
* Tutor: Kaniel Outis (https://www.udemy.com/user/shinoku911/)
*/

/**************************************************/

// This is done to do the mapping for Assertions, Hooks and Step Definition files 
const common = `
    --require setup/assertions.js
    --require setup/hooks.js
    --require step-definitions/**/*.js
    --format json:test-results/cucumber_report.json
    --format html:test-results/cucumber-report.html
    --format @cucumber/pretty-formatter
`
module.exports = {
    default: `${common} features/**/*.feature`,
}
