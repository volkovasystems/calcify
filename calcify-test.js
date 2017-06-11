
const assert = require( "assert" );
const calcify = require( "./calcify.js" );

assert.ok( calcify( global ) );

console.log( "ok" );
