# react-e2e-wdio

## Tech Stack
* Test Framework: Mocha
* Assertion Library: Chai
* Test Reporter: Allure
* Browser: Chrome
* Design Pattern: PageObject

## Run tests

```
npm install
```
```
npm test
```

## Create Allure report

Install allure-commandline

```
npm install -g allure-commandline --save-dev
```

Run Allure generate report command

```
allure generate allure-results
```