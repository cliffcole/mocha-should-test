let should = require('should')
let BankAccount = require('../bankaccount') // First import!


describe('The BankAccount module', () => {

    let target;
    beforeEach(() => {

        target = new BankAccount()
    })

    describe('Testing deposit function', () => {
        it('should deposit 10', () => {
            depositAmount = 10;
            target.deposit(depositAmount);
            target.getBalance().should.be.equal(depositAmount);
        })
        it('should throw error if deposit is < 0', () => {
            depositAmount = -10;
            target.deposit(depositAmount).should.throw(['Cannot deposit a negative amount...']);
        })
    })

    describe('Testing withdraw function', () => {
        it('should deposit 20, withdraw 10 and balance should equal 10', () => {
            withdrawAmount = 10
            target.deposit(20);
            target.withdraw(withdrawAmount)
            target.getBalance().should.be.equal(10);
        })
        it('should deposit 20 and withdraw 10 and balance should equal 10', () => {
            withdrawAmmount = 10;
            target.deposit(20);
            target.withdraw(withdrawAmount);
            target.getBalance().should.be.equal(10);
            target.getFees().should.be.equal(0);
        })
        it('should deposit 20, withdraw 30 and balance should -10 and assess 30 nsf fee', () => {
            withdrawAmount = 30
            target.deposit(20)
            target.withdraw(withdrawAmount)
            target.getBalance().should.be.equal(-40);
            target.getFees().should.be.equal(30);
        })
        it('should deposit 20 and balance should equal 20', () => {
            depositAmount = 20
            target.deposit(depositAmount)
            target.getBalance().should.be.equal(depositAmount);
        })
    })
})