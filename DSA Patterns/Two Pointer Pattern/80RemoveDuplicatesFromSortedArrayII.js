/* 80. Remove Duplicates From Sorted Array II
18 Jan 2026, leetcode Medium

Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.
*/

/*Brute Method 1, use of map, set the count of num
only count < 2, now iterate over the map and in that
iterate over the count and add in nums and atlast
return the index.
TC: O(n), SC: O(n)
*/
var removeDuplicates = function(nums) {
    let map = new Map();
    for(let num of nums){
        let count = map.get(num) || 0;
        if(count < 2){
            map.set(num, count+1)
        }
    } 

    let index = 0;
    for(let [num, count] of map){
        for(let i=0; i<count; i++){
            nums[index++] = num;
        }
    }
    return index
};

/*Optimal Method
TC: O(n), SC: O(1)
*/
var removeDuplicates = function(nums) {
    let len = nums.length;
    let left = 0;
    for(let num of nums){
        if(left < 2 || num !== nums[left-2]){
            nums[left++] = num;
        }
    }
    return left;
};