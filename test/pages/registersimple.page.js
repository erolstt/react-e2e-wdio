var page = require('./page');

var RegisterSimplePage = Object.create(page, {

    // Webelements
    userName:  { get: function () { return $('[name="username"]'); } },
    email:  { get: function () { return $('[name="email"]'); } },
    emailConfirm:  { get: function () { return $('[name="emailConfirm"]'); } },
    password:  { get: function () { return $('[name="password"]'); } },
    devSkills:  { get: function () { return $('[name="devSkills"]'); } },
    acceptTerms:  { get: function () { return $('[name="terms"]'); } },
    reset:  { get: function () { return $('[data-tip="Reset"]'); } },
    clear:  { get: function () { return $('[data-tip="Clear"]'); } },
    submitButton:  { get: function () { return $('[type="submit"]'); } },

    // Methods
    fillForm: { value: function (username, email, emailConf, password, devSkill) {
        this.userName.setValue(username);
        this.email.setValue(email);
        this.emailConfirm.setValue(emailConf);
        this.password.setValue(password);
        this.devSkills.setValue(devSkill);
    }},

    clearForm:{ value: function () {
        this.clear.click();
    }},

    resetForm: { value: function () {
        this.reset.click();
    }},

    submitForm: { value: function () {
        this.submitButton.click();
    }}
});

module.exports = RegisterSimplePage;