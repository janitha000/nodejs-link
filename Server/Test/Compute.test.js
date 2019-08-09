const assert = require('assert');
const should = require('chai').should();
const expect = require('chai').expect;
const compute = require('../Logics/Compute');

describe('#Compute function testing', () => {
    it('should return correct value ', () => {
        const val = compute(10);
        val.should.equal(45);
        
    })

    it('should throw error when number is less than 0', () => {
        expect(() => {
            compute(-1)
        }).to.throw(Error, 'Number must be greater than 0')
    })
})

