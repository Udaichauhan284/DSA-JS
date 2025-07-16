/*3201. Find the Maximum Length of Valid Subsequence I
16 July 2025, Leetcode POTD, Medium
Input: nums = [1,2,3,4]

Output: 4

Explanation:

The longest valid subsequence is [1, 2, 3, 4].
*/


/*In this question we need to look on the equation which is 
given, we want sub[0]+sub[1] mod 2 === sub[1]+sub[2]
so even+even = even mod 2 = 0, odd+odd = even mod 2 = 0
so if both are same we will get the 0 mod and if we taking
sub[1] even or odd, for sub[1]+sub[2] in this we also need to
give sub[1] odd,
even+odd = odd mod 2 = 1, so from all these even or odd or
alrenative sub
TC: O(n), SC: O(1)
*/
var maximumLength = function(nums) {
    let countEven = 0; //length of sub even
    let countOdd = 0; //length of sub odd

    for(let num of nums){
        if(num % 2 === 0){
            countEven++;
        }else{
            countOdd++;
        }
    }
    let parity = nums[0]%2;
    let alternative = 1; //because we have already taken 1 parity
    for(let i=1; i<nums.length; i++){
        let currParity = nums[i]%2;
        if(parity !== currParity){
            alternative++;
        }
        parity = currParity;
    }
    return Math.max(countEven,countOdd, alternative);
};