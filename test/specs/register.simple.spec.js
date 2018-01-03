var expect = require('chai').expect;
var HomePage = require('../pages/home')
var RegisterSimplePage = require('../pages/registersimple.page')

describe('Register Simple form actions', function () {
    it('should submit the form', function () {
        HomePage.open();
        HomePage.selectForm('Register (Simple)');
        RegisterSimplePage.fillForm("Erol Selitektay", "selitektay@gmail.com", "selitektay@gmail.com", "123secret", "10");
        RegisterSimplePage.submitForm();
    });

    it('should clear the form', function () {
        HomePage.open();
        HomePage.selectForm('Register (Simple)');
        RegisterSimplePage.fillForm("Erol Selitektay", "selitektay@gmail.com", "selitektay@gmail.com", "123secret", "10");
        RegisterSimplePage.clearForm();
    });

    it('should reset the form', function () {
        HomePage.open();
        HomePage.selectForm('Register (Simple)');
        RegisterSimplePage.fillForm("Erol Selitektay", "selitektay@gmail.com", "selitektay@gmail.com", "123secret", "10");
        RegisterSimplePage.resetForm();
    });
});