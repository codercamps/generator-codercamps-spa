'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the breathtaking ' + chalk.red('generator-codercamps-spa') + ' generator!'
    ));

  },

  writing: function () {
    let files = [
      // typescript
      'tsconfig.json',
      'tsd.json',

      // angularjs
      'ngApp/controllers/accountController.ts',
      'ngApp/controllers/controllers.ts',
      'ngApp/services/accountService.ts',
      'ngApp/services/services.ts',
      'ngApp/views/about.html',
      'ngApp/views/confirmEmail.html',
      'ngApp/views/externalLogin.html',
      'ngApp/views/externalRegister.html',
      'ngApp/views/home.html',
      'ngApp/views/login.html',
      'ngApp/views/notFound.html',
      'ngApp/views/register.html',
      'ngApp/app.ts',
      'bower.json',

      // express
      'app.ts',
      'package.json',
      'bin/www',
      'public/stylesheets/style.css',
      'routes/index.ts',
      'routes/users.ts',
      'views/error.ejs',
      'views/index.ejs'
    ];

    for (let file of files) {
      this.fs.copyTpl(
        this.templatePath(file),
        this.destinationPath(file)
      );
    }


  },

  install: function () {
    this.installDependencies();
    this.spawnCommandSync('tsd', ['install', '--save']) //tsd install --save
  }
});
