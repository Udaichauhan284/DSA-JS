/* 3234. Count the umber of substrings with dominant ones
15 nov 2025, leetcode potd, medium

*/

var numberOfSubstrings = function(s) {
    const n = s.length;

    // Cumulative count of '1'
    const cumCountOne = new Array(n).fill(0);
    cumCountOne[0] = s[0] === '1' ? 1 : 0;

    for (let i = 1; i < n; i++) {
        cumCountOne[i] = cumCountOne[i - 1] + (s[i] === '1' ? 1 : 0);
    }

    let result = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {

            const oneCount = cumCountOne[j] - (i - 1 >= 0 ? cumCountOne[i - 1] : 0);
            const zeroCount = (j - i + 1) - oneCount;

            const sqZero = zeroCount * zeroCount;

            if (sqZero > oneCount) {
                // skip waste indices
                const wasteIndices = sqZero - oneCount;
                j += wasteIndices - 1;  // move j forward
            }
            else if (sqZero === oneCount) {
                result += 1;
            }
            else {
                // valid substring
                result += 1;

                const k = Math.floor(Math.sqrt(oneCount)) - zeroCount;
                const next = j + k;

                if (next >= n) {
                    result += (n - j - 1);
                    break;
                } else {
                    result += k;
                }

                j = next;
            }
        }
    }

    return result;
};
