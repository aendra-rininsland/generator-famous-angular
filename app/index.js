'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');

var FamousAngularGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.argument('appname', { type: String, required: false });
    this.pkg = require('../package.json');
    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the marvelous Famous/Angular generator!'));

    var prompts = [
      {
        name: 'appName',
        message: 'What\'s your project\'s name?',
        default: this.appname,
      }
    ];

    this.prompt(prompts, function (props) {
      this.appName = props.appName;

      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('app');
    this.copy('app/404.html');
    this.copy('app/favicon.ico');
    this.template('app/_index.html', 'app/index.html');
    this.directory('app/images');
    this.directory('app/partials');
    this.mkdir('app/scripts');
    this.mkdir('app/scripts/main');
    this.template('app/scripts/main/_main-ctrl.js', 'app/scripts/main/main-ctrl.js');
    this.template('app/scripts/_famousAngularStarter.js', 'app/scripts/' + this._.slugify(this.appname) + '.js');
    this.directory('app/styles');

    this.directory('gulp');
    
    this.directory('test');

    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
    this.copy('_README.md', 'README.md');
    this.copy('bowerrc', '.bowerrc');
    this.copy('editorconfig', '.editorconfig');
    this.copy('gitignore', '.gitignore');
    this.copy('jshintrc', 'jshintrc');
    this.copy('gulpfile.js');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = FamousAngularGenerator;
