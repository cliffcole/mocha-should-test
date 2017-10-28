class BankAccount {
    constructor() {
        this._amount = 0
    }

    deposit(amount) {
        if (amount < 0) {
            throw 'Cannot deposit a negative amount...'
        }

        this._amount += amount
    }

    withdraw(amount) {
        if (amount < 0) {
            throw 'Cannot withdraw a negative amount...'
        }

        this._amount -= amount

        if (this._amount < 0) {
            // assess an NSF fee
            this._amount -= 30
            this._totalFees += 30
        }
    }

    get balance() {
        return this._amount
    }

    get fees() {
        return this._totalFees
    }
}

module.exports = BankAccount