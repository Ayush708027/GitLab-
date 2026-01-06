/**
 * Divides two numbers and returns the quotient.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * @throws {TypeError} if arguments are not numbers
 * @throws {Error} if division by zero
 */
function divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('Arguments must be numbers');
    }
    if (b === 0) {
        throw new Error('Division by zero');
    }
    return a / b;
}

module.exports = { divide };
