let should = require('should')
let BankAccount = require('../bankaccount') // First import!

// Create a describe block with a callback
describe('The BankAccount module', () => {
    // Next declare a variable so that all our other tests
    // can see it.
    let target;
    beforeEach(() => {
        // Now assign to that variable inside this callback.
        target = new BankAccount()
    })

    describe('The function is being tested', () => {
        it('should do something', () => {
            // This is where you'll write your test
        })
    })
})