var expect = require('chai').expect;
var HomePage = require('../pages/home')

describe('Submit Register Simple form', function () {
    it('should fill the form' , function () {
        HomePage.open();
        HomePage.selectForm('Register (Simple)');
    });
});