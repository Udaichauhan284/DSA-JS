/* 75. Sort Colors
12 June 2024 Leetcode POTD, Topic: Array, Two Pointer, Sorting
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
You must solve this problem without using the library's sort function.
*/
/* Method 1 - simple libary in-built method
TC: O(nlogn), SC: O(1)
*/
// var sortColors = function(nums) {
//     return nums.sort((a,b) => a-b);
// };

/* Method 2- use of counter variable for 0 and 1 counting
and loop till cout0 add 0 in starting and then count0 to count1 
add 1 and after that add 2
TC: O(2n), SC: O(1)
*/
// const sortColors = (nums) => {
//     let n = nums.length;
//     let countZero = 0;
//     let countOne = 0;
//     for(let i=0; i<n; i++){
//         if(nums[i] === 0) countZero++;
//         if(nums[i] === 1) countOne++;
//     }

//     for(let i=0; i<countZero; i++){
//         nums[i] = 0;
//     }
//     for(let i=countZero; i<(countZero+countOne); i++){
//         nums[i] = 1;
//     }
//     for(let i=(countZero+countOne); i<n; i++){
//         nums[i] = 2;
//     }
//     return nums;
// }

//Method-1, TC: O(nlogn), SC: O(1)
// var sortColors = function(nums) {
//     return nums.sort((a,b) => a-b);
// };

//Method-2, we use the countZero and countOne and start the loop
//till countZero put the zero then from zero to zero+one, then till
//n. TC: O(2n), SC: O(1)
// var sortColors = function(nums) {
//     let len = nums.length;
//     let countZero = 0;
//     let countOne = 0;
//     for(let i=0; i<len; i++){
//         if(nums[i] === 0) countZero++;
//         if(nums[i] === 1) countOne++;
//     }

//     //from zero to countZero
//     for(let i=0; i<countZero; i++){
//         nums[i] = 0;
//     }
//     //from countZero to countZero+countOne
//     for(let i=countZero; i<countZero+countOne; i++){
//         nums[i] = 1;
//     }
//     for(let i=countZero+countOne; i<len; i++){
//         nums[i] = 2;
//     }
//     return nums;
// };

/*Method 3, in one pass, we can use the low denote the zero,
mid denotes the one and high denotes the high, we iterate over the
mid to high, and if we see mid === 1, increase the mid, mid === 0
0 needs to go the first place, swap the low and mid, and increase
the mid and low, and if mid === 2, swap the mid and high and 
descrease the high. TC: O(n), SC: O(1)
*/
var sortColors = (nums) => {
    let low = 0, mid = 0, high = nums.length-1;
    while(mid <= high){
        if(nums[mid] === 1){
            //we want one in middle
            mid++;
        }
        else if(nums[mid] === 0){
            //we want zero in starting
            [nums[mid], nums[low]] = [nums[low], nums[mid]];
            low++;
            mid++;
        }else{
            //mid is 2
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
    return nums;
}