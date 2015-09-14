/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	proxyquire = require( 'proxyquire' ),
	re = require( './../lib' );


// VARIABLES //

var assert = chai.assert;


// TESTS //

describe( 'regex-filename', function tests() {

	it( 'should export a regular expression', function test() {
		assert.isTrue( re instanceof RegExp );
	});

	it( 'should export a regular expression for POSIX filenames', function test() {
		assert.isTrue( re.posix instanceof RegExp );
	});

	it( 'should export a regular expression for Windows filenames', function test() {
		assert.isTrue( re.win32 instanceof RegExp );
	});

	it( 'should export a POSIX specific regular expression if on a POSIX platform', function test() {
		var re;

		re = proxyquire( './../lib', {
			'check-if-windows': false
		});

		assert.strictEqual( re, re.posix );
	});

	it( 'should export a Windows specific regular expression if on a Windows platform', function test() {
		var re;

		re = proxyquire( './../lib', {
			'check-if-windows': true
		});

		assert.strictEqual( re, re.win32 );
	});

	it( 'should split POSIX filenames', function test() {
		var expected,
			values,
			parts,
			i;

		values = [
			'/foo/bar/home.html',
			'index.js'
		];

		expected = [
			['/foo/bar/home.html','/','foo/bar/','home.html','.html'],
			['index.js','','','index.js','.js']
		];

		for ( i = 0; i < values.length; i++ ) {
			parts = re.posix.exec( values[ i ] ).slice();
			assert.deepEqual( parts, expected[ i ] );
		}
	});

	it( 'should split Windows filenames', function test() {
		var expected,
			values,
			parts,
			i;

		values = [
			'C:\\foo\\bar\\home.html',
			'index.js'
		];

		expected = [
			['C:\\foo\\bar\\home.html','C:','\\','foo\\bar\\','home.html','.html'],
			['index.js','','','','index.js','.js']
		];

		for ( i = 0; i < values.length; i++ ) {
			parts = re.win32.exec( values[ i ] ).slice();
			assert.deepEqual( parts, expected[ i ] );
		}
	});

});
