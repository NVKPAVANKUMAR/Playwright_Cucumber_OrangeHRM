/**************************************************/

/**  
* @author NVK PAVANKUMAR
*/

/**************************************************/
var os = require('os');
const reporter = require('cucumber-html-reporter')

// These options will be used at the time of HTML Report generation
const options = {
    theme: 'bootstrap',
    jsonFile: 'test-results/cucumber_report.json',
    output: 'test-results/cucumber_report.html',
    reportSuiteAsScenario: true,
    scenarioTimestamp: true,
    launchReport: false,
    metadata: {
        'App Version': '2.0.0',
        'Test Environment': 'Test',
        Browser: "Chrome",
        Platform: `${os.type()} ${os.release()} ${os.platform()}`,
    },
}

reporter.generate(options)
