/* 26. Remove Duplicates from Sorted Array
18 Jan 2026, Leetocde EASY

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/

/* Brute Method
TC: O(n), SC: O(n)
*/
var removeDuplicates = function(nums) {
    let set = new Set(nums); //{1,2}
    let unique = [...set]; //[1,2]

    //now copy unique one into nums
    for(let i=0; i<unique.length; i++){
        nums[i] = unique[i];
    }
    //now after this loop, num is [1,2,2]
    //as mention in question after unique element
    //len elem matter after that not
    return unique.length;
};

/*Optimal Method, i can use the 2-pointer method,
we need to maintain the k, k is unique eleme length
so i will point one pointer at first place and now
unique elem is 1, now i start moving when i see the
different elem, i will send it after starter pointer+1
and increase the counter.
TC: O(n), SC: O(1)
*/
var removeDuplicates = function(nums) {
    let len = nums.length;
    let numOfUnique = 1;
    let left = 0;
    //now start moving to right, with second pointer
    let right = 1;
    while(right < len){
        //now compare the elements
        if(nums[right] !== nums[left]){
            //means we get the unique one, set it to
            //after the left pointer
            nums[left+1] = nums[right];
            left++;
            numOfUnique++;
        }
        right++;
    }
    return numOfUnique;
};