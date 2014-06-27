# generator-famous-angular [![Build Status](https://secure.travis-ci.org/aendrew/generator-famous-angular.png?branch=master)](https://travis-ci.org/aendrew/generator-famous-angular)

> A [Yeoman](http://yeoman.io) generator for [Famo.us/Angular][1]

This generator scaffolds out a [Famo.us/Angular][1] project using the seed repo
found at [thomasstreet/angular][2].

## Usage:

```
$ mkdir famous-angular-project && cd_
$ yo famous-angular <appname>
```

##Running

### The easy way

  1. Make sure that you have [npm](http://blog.nodeknockout.com/post/65463770933/how-to-install-node-js-and-npm) installed
  2. In your terminal, run `npm install -g serve`
  3. In your terminal, change your directory to <appname>/app
  4. In your terminal, run `serve`

You should then be able to open the examples at http://localhost:3000


### The more powerful way

  1. Make sure that you have [npm](http://blog.nodeknockout.com/post/65463770933/how-to-install-node-js-and-npm) installed
  2. In your terminal, run `npm install -g gulp`
  3. In your terminal, run `npm install` to install package dependencies, including bower dependencies
  4. In your terminal, from the famous-angular-starter base directory, run `gulp watch`

You should then be able to open the examples at http://localhost:4000.  The page will auto-reload when you make changes to the app.

[1]: http://famo.us/integrations/angular/
[2]: https://github.com/thomasstreet/famous-angular-starter/
