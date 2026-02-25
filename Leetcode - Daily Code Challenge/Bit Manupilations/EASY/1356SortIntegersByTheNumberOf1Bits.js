/* 1356. Sort Integers by The Number of 1 bits
25 Feb 2026, leetcode potd, easy
Input: arr = [0,1,2,3,4,5,6,7,8]
Output: [0,1,2,4,8,3,5,6,7]
Explantion: [0] is the only integer with 0 bits.
[1,2,4,8] all have 1 bit.
[3,5,6] have 2 bits.
[7] has 3 bits.
The sorted array by bits is [0,1,2,4,8,3,5,6,7]

*/

//TC: O(nlogn*k), SC: O(1)
var sortByBits = function(arr) {
    return arr.sort((a,b) => {
        let countA = countSetBits(a);
        let countB = countSetBits(b);

        if(countA === countB){
            return a - b;   // ascending numeric order
        }
        return countA-countB;
    });
};
function countSetBits(n){
    let count = 0;
    while(n){
        count += n & 1;
        n >>= 1;
    }
    return count;
}