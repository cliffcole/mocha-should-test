class Calculator {
    constructor() {
    }

    add(x, y) {
        return x + y
    }

    multiply(x, y) {
        return x * y
    }

    power(x, y) {

        if (y < 0) {
            throw 'We only support positive exponents...'
        } else if (y == 0) {
            return 1
        } else if (x == 0) {
            return 0
        }

        let sum = x;
        for (let i = 1; i < y; i++) {
            sum *= x
        }

        return sum
    }

    divide(x, y) {
        if (y == 0) {
            throw 'Cannot divide by zero...'
        }

        return x / y
    }
}

module.exports = Calculator