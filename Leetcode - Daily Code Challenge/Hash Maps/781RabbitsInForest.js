/* 781. Rabbits in Forest
20 April 25, Leetcode POTD
*/
var numRabbits = function(answers) {
    const freq = {};
    for (const a of answers) {
        freq[a] = (freq[a] || 0) + 1;
    }

    let count = 0;
    for (const k in freq) {
        const key = parseInt(k);
        const v = freq[k];
        const groupSize = key + 1;
        const groups = Math.ceil(v / groupSize);
        count += groups * groupSize;
    }

    return count;
};