'use strict';

var expect = require('chai').expect;
var { add, sub, mul, div, isPalindrome,
    getPermutation,
    computeArea,} = require('../index');

describe('add', function() {
    it('1+1=2', function() {
        expect(add(1,1)).to.equal(2)
    });
    it('1+2+3=6', function() {
        expect(add(1,2,3)).to.equal(6)
    })
});

describe('sub', function() {
    it('7-4-1=2', function() {
        expect(sub(7,4,1)).to.equal(2);
    });
});

describe('mul', function() {
    it('5*3=15', function() {
        expect(mul(5,3)).to.equal(15);
    });
    it('2*3*4=24', function() {
        expect(mul(2,3,4)).to.equal(24);
    });
});

describe('div', function() {
    it('4/2=2', function() {
        expect(div(4,2)).to.equal(2)
    })
    it('2/0=MAX_INT', function() {
        expect(div(2,0)).to.equal(Number.MAX_SAFE_INTEGER)
    })
})

describe('number is palindrom', function() {
    it('should be palindrom if x = 12321', function() {
        expect(isPalindrome(12321)).to.equal(true)
    })
})