/* 1498. Number of Subsequences That Staify the Given Sum Condition
29 June 2025, leetocde POTD, Medium
Input: nums = [3,5,6,7], target = 9
Output: 4
Explanation: There are 4 subsequences that satisfy the condition.
[3] -> Min value + max value <= target (3 + 3 <= 9)
[3,5] -> (3 + 5 <= 9)
[3,5,6] -> (3 + 6 <= 9)
[3,6] -> (3 + 6 <= 9)
*/

/*In this we will sort the nums,
then we will use the two pointer, we will
fix the low and right, if low+right <= tar
means on right hand side of r, will also
make the subseq, we will add that in result
the pow(2, r-l)
TC: O(nlogn), SC: O(n)
*/
const M = 1e9+7;
var numSubseq = function(nums, target) {
    let len = nums.length;
    //sort the nums
    nums.sort((a,b) => a-b);

    //now find the pow
    let power = Array(len);
    power[0]=1;
    for(let i=1; i<len; i++){
        power[i] = (power[i-1] * 2) % M
    }

    //now use the two pointer
    let l=0;
    let r = len-1;
    let result=0;
    while(l <= r){
        if(nums[l]+nums[r] <= target){
            let diff = r-l;
            result = (result%M + power[diff])%M;
            l++;
        }else{
            r--;
        }
    }
    return result;
};