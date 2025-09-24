/* 166. Fraction to Recurring Decimal
24 Sept 2025 leetcode potd, meidum

Example 1:

Input: numerator = 1, denominator = 2
Output: "0.5"
Example 2:

Input: numerator = 2, denominator = 1
Output: "2"
Example 3:

Input: numerator = 4, denominator = 333
Output: "0.(012)"
*/

var fractionToDecimal = function(numerator, denominator) {
    if (numerator === 0) return "0";

    let result = "";

    // check sign
    if (numerator * denominator < 0) {
        result += "-";
    }

    let absNumerator = Math.abs(numerator);
    let absDenominator = Math.abs(denominator);

    // integer part
    let integerDiv = Math.floor(absNumerator / absDenominator);
    result += integerDiv.toString();

    let remain = absNumerator % absDenominator;
    if (remain === 0) {
        return result;
    }

    result += ".";

    // map: remainder -> index in result string
    const mp = new Map();

    while (remain !== 0) {
        if (mp.has(remain)) {
            const idx = mp.get(remain);
            result = result.slice(0, idx) + "(" + result.slice(idx) + ")";
            break;
        }

        mp.set(remain, result.length);

        remain *= 10;
        const digit = Math.floor(remain / absDenominator);
        result += digit.toString();
        remain %= absDenominator;
    }

    return result;
};