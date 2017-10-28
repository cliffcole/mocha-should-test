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

    describe('The function that is being tested', () => {
        it('should do something', () => {
            // This is where you'll write your test
        })
    })
})