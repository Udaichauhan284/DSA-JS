/* 1432. Max Difference You Can get from changing an integer
15 june 25, leetcode potd
Input: num = 555
Output: 888
Explanation: The first time pick x = 5 and y = 9 and store the new integer in a.
The second time pick x = 5 and y = 1 and store the new integer in b.
We have now a = 999 and b = 111 and max difference = 888
*/

var maxDiff = function(num) {
    let str1 = num.toString();
    let str2 = str1;

    // Step 1: Create max number by replacing the first non-'9' digit with '9'
    let idx = [...str1].findIndex(ch => ch !== '9');
    if (idx !== -1) {
        let ch = str1[idx];
        str1 = str1.split('').map(c => c === ch ? '9' : c).join('');
    }

    // Step 2: Create min number avoiding leading zeros
    str2 = str2.split('');
    for (let i = 0; i < str2.length; i++) {
        let ch = str2[i];
        if (i === 0) {
            if (ch !== '1') {
                str2 = str2.map(c => c === ch ? '1' : c);
                break;
            }
        } else if (ch !== '0' && ch !== str2[0]) {
            str2 = str2.map(c => c === ch ? '0' : c);
            break;
        }
    }
    str2 = str2.join('');

    return parseInt(str1) - parseInt(str2);
};