/* 2460. Apply Operations to an array
01 March 25, Leetcode POTD, Array Easy
Input: nums = [1,2,2,1,1,0]
Output: [1,4,2,0,0,0]
Explanation: We do the following operations:
- i = 0: nums[0] and nums[1] are not equal, so we skip this operation.
- i = 1: nums[1] and nums[2] are equal, we multiply nums[1] by 2 and change nums[2] to 0. The array becomes [1,4,0,1,1,0].
- i = 2: nums[2] and nums[3] are not equal, so we skip this operation.
- i = 3: nums[3] and nums[4] are equal, we multiply nums[3] by 2 and change nums[4] to 0. The array becomes [1,4,0,2,0,0].
- i = 4: nums[4] and nums[5] are equal, we multiply nums[4] by 2 and change nums[5] to 0. The array becomes [1,4,0,2,0,0].
After that, we shift the 0's to the end, which gives the array [1,4,2,0,0,0].
*/


/*Brute Method, Taking extra space to so that
we can store zero to last and numbers to first
TC: O(n), SC: O(n)
*/
var applyOperations = function(nums) {
    let len = nums.length;
    let arr = Array(len).fill(0);

    for(let i=0; i<len-1; i++){
        if(nums[i] === nums[i+1]){
            nums[i] *= 2;
            nums[i+1] = 0;
        }
    }

    let index = 0; //for taking the pointer of zero
    for(let i=0; i<len; i++){
        if(nums[i] !== 0){
            arr[index] = nums[i];
            index++;
        }
    }
    return arr;
};




/*Better Approach, in this we use the two pass and for 
placing the 0, i will the index pointer and start moving it
TC: O(2n)~O(n), SC: O(1)
*/
var applyOperations = function(nums) {
    let len = nums.length;
    for(let i=0; i<len-1; i++){
        if(nums[i] === nums[i+1]){
            nums[i] *= 2;
            nums[i+1]=0;
        }
    }

    let index = 0;
    for(let i=0; i<len; i++){
        if(nums[i] !== 0){
            nums[index] = nums[i];
            index++;
        }
    }
    //now at last where index is, from there to last
    //mark everyone zero
    while(index < len){
        nums[index] = 0;
        index++;
    }

    return nums;
};


/*Optimal Method, only use one pass, 
TC: O(n), SC: O(1)
*/
var applyOperations = function (nums) {
    let len = nums.length;
    let index = 0;
    for (let i = 0; i < len; i++) {
        if (nums[i] === nums[i + 1] && nums[i] !== 0) {
            nums[i] *= 2;
            nums[i + 1] = 0;
        }

        if (nums[i] !== 0) {
            if (i !== index) {
                [nums[i], nums[index]] = [nums[index], nums[i]]
            }
            index++;
        }
    }
    return nums;
};