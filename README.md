Split Filename
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> [Regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) to split a filename.


## Installation

``` bash
$ npm install regex-filename
```


## Usage

``` javascript
var re = require( 'regex-filename' );
```

#### re

[Regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) to split a filename.

``` javascript
var parts;

// On a POSIX platform...
parts = re.exec( '/foo/bar/index.js' );
/*
	[
		'/foo/bar/index.js',   // input value
		'/',                   // root
		'foo/bar/',            // dirname
		'index.js',            // basename
		'.js'                  // extname
	]
*/

// On a Windows platform...
parts = re.exec( 'C:\\foo\\bar\\index.js' );
/*
	[
		'C:\\foo\\bar\\index.js',   // input value
		'C:',                       // device
		'\\',                       // slash
		'foo\\bar\\',               // dirname
		'index.js',                 // basename
		'.js'                       // extname
	]
*/
```


#### re.posix

[Regular expression](https://github.com/kgryte/regex-filename-posix) to split a [POSIX](https://en.wikipedia.org/wiki/POSIX) filename.


#### re.win32

[Regular expression](https://github.com/kgryte/regex-filename-windows) to split a Windows filename.


## Notes

*	 The main exported [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) is [platform](https://github.com/kgryte/node-check-if-windows)-dependent.



## Examples

``` javascript
var re = require( 'regex-filename' );

var parts;

// Assuming a POSIX platform...
parts = re.exec( 'index.js' );
console.log( parts );
/*
	[
		'index.js',
		'',
		'',
		'index.js',
		'.js'
	]
*/

parts = re.posix.exec( '/foo/bar/home.html' );
console.log( parts );
/*
	[
		'/foo/bar/home.html',
		'/',
		'foo/bar/',
		'home.html',
		'.html'
	]
*/

parts = re.win32.exec( 'C:\\foo\\bar\\home.html' );
console.log( parts );
/*
	[
		'C:\\foo\\bar\\home.html',
		'C:',
		'\\',
		'foo\\bar\\',
		'home.html',
		'.html'
	]
*/

```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/regex-filename.svg
[npm-url]: https://npmjs.org/package/regex-filename

[travis-image]: http://img.shields.io/travis/kgryte/regex-filename/master.svg
[travis-url]: https://travis-ci.org/kgryte/regex-filename

[codecov-image]: https://img.shields.io/codecov/c/github/kgryte/regex-filename/master.svg
[codecov-url]: https://codecov.io/github/kgryte/regex-filename?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/regex-filename.svg
[dependencies-url]: https://david-dm.org/kgryte/regex-filename

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/regex-filename.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/regex-filename

[github-issues-image]: http://img.shields.io/github/issues/kgryte/regex-filename.svg
[github-issues-url]: https://github.com/kgryte/regex-filename/issues
