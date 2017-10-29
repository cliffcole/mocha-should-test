let should = require('should')
let exercises = require('../exercises') // First import!

// Create a describe block with a callback
describe('The exercises module', () => {

    describe('testing doubleArray()', () => {
        it('should return double array', () => {
            arrayToDouble = [2,4,5]
            exercises.doubleArray(arrayToDouble).should.be.eql([4,8,10]);
        })
        it('should return empty array if we pass a non array',() => {
            arrayToDouble = ""
            exercises.doubleArray(arrayToDouble).should.be.eql([]);
        })
    })
    describe('testing checkDictionaryForKey()', () => {
        it('should return false if we pass an array', () => {
            arrayToPass = [1,2,3];
            exercises.checkDictionaryForKey(arrayToPass).should.be.false();
        })
        it('should return false if not a number', () => {
            stringToPass = 1
            exercises.checkDictionaryForKey(stringToPass).should.be.false();
        })
        it('should return key from dictionary', () => {
            dictionaryToPass = { theKey: "the Value"}
            exercises.checkDictionaryForKey(dictionaryToPass, 'theKey');
        })
    })
})