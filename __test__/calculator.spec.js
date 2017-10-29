let should = require('should')
let Calculator = require('../calculator') // First import!

// Create a describe block with a callback
describe('The calculator module', () => {
    // Next declare a variable so that all our other tests
    // can see it.
    let target;
    beforeEach(() => {
        // Now assign to that variable inside this callback.
        target = new Calculator()
    })

    describe('testing add()', () => {
        it('should add 1 + 1 and = 2', () => {
            x = 1
            y = 1
            target.add(x,y).should.be.equal(2);
        })
    })

    describe('testing multiply()', () => {
        it('should multiply 2 + 2 and = 4', () => {
            x = 2
            y = 2
            target.multiply(x,y).should.be.equal(4);
        })
    })

    describe('testing power()', () => {
        it('2 to the 4 power should equal 16', () => {
            x = 2
            y = 4
            target.power(x,y).should.be.equal(16);
        })
        it('if y is a negative number should throw error', () => {
            x = 2
            y = -2
            should(() => {
                power(x,y)
            }).throw();
            
        })
        it('if y equals 0 should return 1', () => {
            x = 2
            y = 0
            target.power(x,y).should.be.equal(1);
        })
        it('if x equals 0 should return 0', () => {
            x = 0
            y = 2
            target.power(x,y).should.be.equal(0);
        })
    })

    describe('testing divide()', () => {
        it('4 divided by 2 should equal 1', () => {
            x = 4
            y = 2
            target.divide(x,y).should.be.equal(2);
        })
    })
})