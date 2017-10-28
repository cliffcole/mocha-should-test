
function doubleArray(toDouble) {
    if (Array.isArray(toDouble)) {
        newArray = []
        for (let i = 0; i < toDouble.length; i++) {
            newArray.push(toDouble[i] * 2)
        }
        return newArray
    } else {
        return []
    }
}

function checkDictionaryForKey(dictionary, key) {
    if (Array.isArray(dictionary)) {
        return false
    } else if (!isNaN(dictionary)) {
        return false
    } else {
        return key in dictionary
    }    
}

// Extra hard!
function fizzBuzz(length) {
    let result = ""
    for (let i = 1; i <= length; i++) {
        let f = i % 3 == 0
        let b = i % 5 == 0
        result += f ? b ? "FizzBuzz " : "Fizz " : b ? "Buzz " : i + " "
    }
    return result
}

module.exports.doubleArray = doubleArray
module.exports.checkDictionaryForKey = checkDictionaryForKey
module.exports.fizzBuzz = fizzBuzz