"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "calcify",
			"path": "calcify/calcify.js",
			"file": "calcify.js",
			"module": "calcify",
			"author": "Richeve S. Bebedor",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon"
			],
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/calcify.git",
			"test": "calcify-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Stringify JSON with standard structure.
	@end-module-documentation

	@include:
		{
			"jnfy": "jnfy",
			"parseon": "parseon"
		}
	@end-include
*/

const jnfy = require( "jnfy" );
const parseon = require( "parseon" );

const calcify = function calcify( object ){
	/*;
		@meta-configuration:
			{
				"object:required": [
					"string",
					"object"
				]
			}
		@end-meta-configuration
	*/

	try{
		object = parseon( object );

	}catch( error ){
		throw new Error( `cannot re-parse object, ${ error.stack }` );
	}

	return jnfy( object, null, "\t" );
};

module.exports = calcify;
