/*3606. Coupon Code Validator
13 Dec 2025, leetcode potd, easy
Input: code = ["SAVE20","","PHARMA5","SAVE@20"], businessLine = ["restaurant","grocery","pharmacy","restaurant"], isActive = [true,true,true,true]

Output: ["PHARMA5","SAVE20"]

Explanation:

First coupon is valid.
Second coupon has empty code (invalid).
Third coupon is valid.
Fourth coupon has special character @ (invalid).
*/

function checkValidCode(code) {
    if (code.length === 0) return false;

    for (let ch of code) {
        // alphanumeric or underscore
        if (!(/[a-zA-Z0-9_]/).test(ch)) {
            return false;
        }
    }
    return true;
}

function validateCoupons(code, businessLine, isActive) {
    const mp = {
        electronics: 0,
        grocery: 1,
        pharmacy: 2,
        restaurant: 3
    };

    // array of [businessLineValue, code]
    const temp = [];

    for (let i = 0; i < code.length; i++) {
        if (
            isActive[i] === true &&
            mp.hasOwnProperty(businessLine[i]) &&
            checkValidCode(code[i])
        ) {
            temp.push([mp[businessLine[i]], code[i]]);
        }
    }

    // sort by business line value, then by code automatically
    temp.sort((a, b) => {
    if (a[0] !== b[0]) {
        return a[0] - b[0]; // business line priority
    }
    // ASCII string comparison (like C++)
    if (a[1] < b[1]) return -1;
    if (a[1] > b[1]) return 1;
    return 0;
});

    // extract only codes
    return temp.map(item => item[1]);
}
