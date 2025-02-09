/*2364 Count Number of Bad Pairs
09 eb 25 leetcode POTD, Array HashMap
You are given a 0-indexed integer array nums. A pair of indices (i, j) is a bad pair if i < j and j - i != nums[j] - nums[i].

Return the total number of bad pairs in nums.

Input: nums = [4,1,3,3]
Output: 5
Explanation: The pair (0, 1) is a bad pair since 1 - 0 != 1 - 4.
The pair (0, 2) is a bad pair since 2 - 0 != 3 - 4, 2 != -1.
The pair (0, 3) is a bad pair since 3 - 0 != 3 - 4, 3 != -1.
The pair (1, 2) is a bad pair since 2 - 1 != 3 - 1, 1 != 2.
The pair (2, 3) is a bad pair since 3 - 2 != 3 - 3, 1 != 0.
There are a total of 5 bad pairs, so we return 5.
*/

/*Use of brute approach, use of nested loop
TC: O(n^2), SC: O(1)
*/
var countBadPairs = function(nums) {
    let len = nums.length;
    let count = 0;
    for(let i=0; i<len; i++){
        for(let j=i+1; j<len; j++){
            if(j-i !== nums[j]-nums[i]){
                count++;
            }
        }
    }
    return count;
};



/*Use of hashmap, TC: O(n), SC: O(n)
*/
var countBadPairs = function(nums) {
    let n = nums.length;
    let result = 0;
    let mp = new Map();

    for (let i = 0; i < n; i++) {
        let diff = nums[i] - i;

        let totalPairsTillIndex = i;
        let goodPairs = mp.get(diff) || 0;

        result += (totalPairsTillIndex - goodPairs);

        mp.set(diff, goodPairs + 1);
    }

    return result;
};