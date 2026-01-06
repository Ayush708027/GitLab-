/**
 * Subtracts second number from the first and returns the difference.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * @throws {TypeError} if arguments are not numbers
 */
function subtract(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('Arguments must be numbers');
    }
    return a - b;
}

module.exports = { subtract };
