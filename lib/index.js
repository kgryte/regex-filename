'use strict';

// MODULES //

var isWindows = require( 'check-if-windows' );


// REGEX //

var posix,
	win32,
	re;

posix = require( 'regex-filename-posix' );
win32 = require( 'regex-filename-windows' );

if ( isWindows ) {
	re = win32;
} else {
	re = posix;
}


// EXPORTS //

module.exports = re;
module.exports.posix = posix;
module.exports.win32 = win32;
