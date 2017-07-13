
const assert = require( "assert" );
const calcify = require( "./calcify.js" );

assert.equal( typeof calcify( { "hello": "world" } ), "string", "should return 'string'" );

console.log( "ok" );
