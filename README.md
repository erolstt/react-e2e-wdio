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

## Run test in Selenium Docker Container

Run Selenium standalone container
```
docker run -d -p 4444:4444 -p 5900:5900 -v /dev/shm:/dev/shm selenium/standalone-chrome-debug:3.8.1-chlorine
```

Run Tests

```
npm test wdio.conf.remote.js
```

As Selenium standalone debug image is run which has VNC server, it's possible to go inside 
the container and see what the browser is doing.

You can connect to the server with any VNC client using the port number and the password
which is `secret`
If you are running docker on Mac OS, then you can connect the server by putting below command on Safari

```
vnc://localhost:5900
```