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
            target.balance.should.be.equal(depositAmount);
        })
        it('should throw error if deposit is < 0', () => {
            depositAmount = -10;
            var testError = () => {
                target.deposit(depositAmount);
            }
            testError.should.throw();
        })
    })

    describe('Testing withdraw function', () => {
        it('should deposit 20, withdraw 10 and balance should equal 10', () => {
            withdrawAmount = 10
            target.deposit(20);
            target.withdraw(withdrawAmount)
            target.balance.should.be.equal(10);
        })
        it('should deposit 20 and withdraw 10 and balance should equal 10', () => {
            withdrawAmmount = 10;
            target.deposit(20);
            target.withdraw(withdrawAmount);
            target.balance.should.be.equal(10);
            target.fees.should.be.equal(0);
        })
        it('should deposit 20, withdraw 30 and balance should -10 and assess 30 nsf fee', () => {
            withdrawAmount = 30
            target.deposit(20)
            target.withdraw(withdrawAmount)
            target.balance.should.be.equal(-40);
            target.fees.should.be.equal(30);
        })
        it('should deposit 20 and balance should equal 20', () => {
            depositAmount = 20
            target.deposit(depositAmount)
            target.balance.should.be.equal(depositAmount);
        })
    })
    describe('Test balance', () => {
        it('deposit 10 should equal 10', () => {
            depositAmount = 10
            target.deposit(depositAmount);
            target.balance.should.be.equal(depositAmount);

        })
    })
    describe('Test fees', () => {
        it('deposite 10, withdraw 20, fees should equal 30', () => {
            depositAmount = 10
            withdrawAmount = 20
            target.deposit(depositAmount);
            target.withdraw(withdrawAmount)
            target.fees.should.be.equal(30);
        })
    })
})