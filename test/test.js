let chai = require('chai');

var expect = require('chai').expect;
expect(1).to.be.a('number');

let assert = require('chai').assert;
assert.typeOf(1, 'number');