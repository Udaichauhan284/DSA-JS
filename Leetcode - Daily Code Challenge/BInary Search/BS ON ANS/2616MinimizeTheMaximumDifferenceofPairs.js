/* 2616. Minimize the Maximum Difference of Pairs
13 June 25, Leetocde POTD, Medium
Input: nums = [10,1,2,7,1,3], p = 2
Output: 1
Explanation: The first pair is formed from the indices 1 and 4, and the second pair is formed from the indices 2 and 5. 
The maximum difference is max(|nums[1] - nums[4]|, |nums[2] - nums[5]|) = max(0, 1) = 1. Therefore, we return 1.
*/

/*In this we need to find the min of max,
so we can use the binary search, we know the 
min diff is 1-1 is 0, so we need to iterate over 
the min diff to max diff. we can apply the Binary
Search on ans, TC: O(nlogn), SC: O(1)
*/
var minimizeMax = function(nums, p) {
    //first sort the nums
    nums.sort((a,b) => a-b);
    //now we can apply the binary search
    let low = 0;
    let high = nums[nums.length-1]-nums[0];
    let result = 0;
    while(low <= high){
        let mid = low + Math.floor((high-low)/2);
        if(isValid(nums,mid,p)){
            result = mid;
            high = mid - 1; //now i need more min
        }else{
            low = mid + 1;
        }
    }
    return result;
};
function isValid(nums,mid,p){
    //in this we need to find the diff and
    //increase the pairs
    let i = 0;
    let pairs = 0;
    while(i < nums.length-1){
        if(nums[i+1]-nums[i] <= mid){
            pairs++;
            i+=2; //need to go other elem, 2 gap
        }else{
            i++;
        }
    }
    return pairs >= p;
}