# Playwright + POM + cucumberJS + Allure

This is a Playwright + POM + cucumberJS + Allure implementation with various types of reports

1. You must install the npm libraries
```bash
  npm install
```
2. You can run the tests in 2 ways
- to see the execution in the console
```bash
  npm run test
```
- to be able to obtain the results with allure report
```bash
  npm run test:allure
```
3. you can obtain the reporters in different ways
- run the cucumber-html-reporter library to obtain the html report from that library
```bash
  npm run report-simple-cucumber

```
- run the multiple-cucumber-html-reporter library to obtain the html report from that library
```bash
  npm run report-multiple-cucumber

```
- execute the generation of the results for allure report
```bash
  npm run allure-generate

```
- open the allure report on a port shown in the console
```bash
  npm run allure-open

```

all reports in html format will be saved in the folder
```bash
  test-results/

```
