
const assert = require( "assert" );
const calcify = require( "./calcify.js" );

assert.equal( typeof calcify( { "hello": "world" } ), "string", "should be equal to 'string'" );

console.log( "ok" );
