'use strict';

var re = require( './../lib' );

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
