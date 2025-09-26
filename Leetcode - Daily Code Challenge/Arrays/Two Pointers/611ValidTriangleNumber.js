/* 611. Valid Triangle Number
26 Sept 2025, leetcode potd, medium
Input: nums = [2,2,3,4]
Output: 3
Explanation: Valid combinations are: 
2,3,4 (using the first 2)
2,3,4 (using the second 2)
2,2,3
*/

/*First in this we follow the property of triangle,
sum of 2 sides is greater then 3rd one, so we will
follow that and check everything inside loop
TC: O(n^3), SC: O(1)
*/
var triangleNumber = function(nums) {
    let len = nums.length;
    let count = 0;
    for(let i=0; i<=len-3; i++){
        for(let j=i+1; j<=len-2; j++){
            for(let k=j+1; k<=len-1; k++){
                if(nums[i]+nums[j] > nums[k] &&
                   nums[i]+nums[k] > nums[j] &&
                   nums[j]+nums[k] > nums[i]
                ){
                    count++;
                }
            }
        }
    }
    return count;
};


/*Method 2, we can sort the nums array, and then we
can use the two nested loop and put two pointer
and then in remaining part we can use the binary 
search so that we can find the x which is less then
nums[i]+nums[j]
TC: O(n^2 * logn), SC: O(1)
*/
var triangleNumber = function(nums) {
    let len = nums.length;
    let count = 0;
    //sort the nums
    nums.sort((a,b) => a-b);

    for(let i=0; i<len; i++){
        if(nums[i] === 0) continue;
        for(let j=i+1; j<len; j++){
            let sum = nums[i]+nums[j];
            let valFromBS = binarySearch(j+1, len-1,nums,sum);
            if(valFromBS !== -1){
                count += (valFromBS - j);
            }
        }
    }
    return count;
};

const binarySearch = (l, r, nums, sum) => {
    let val = -1;
    while(l <= r){
        let mid = l+Math.floor((r-l)/2);
        if(nums[mid] < sum){
            //we get the value, assign in val, but we want more
            val = mid;
            l = mid+1;
        }else{
            r = mid-1;
        }
    }
    return val;
}