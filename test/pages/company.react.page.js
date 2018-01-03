var page = require('./page');

var CompanyReactPage = Object.create(page, {

    // Webelements
    userName:  { get: function () { return $('[name="username"]'); } },


    // Methods
    fillForm: { value: function (username, email, emailConf, password, devSkill) {
        this.userName.setValue(username);
        this.email.setValue(email);
        this.emailConfirm.setValue(emailConf);
        this.password.setValue(password);
        this.devSkills.setValue(devSkill);
    }}

});

module.exports = CompanyReactPage;