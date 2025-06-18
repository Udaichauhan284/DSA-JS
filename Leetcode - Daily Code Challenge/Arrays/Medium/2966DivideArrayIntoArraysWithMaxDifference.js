/* 2966. Divide Array into Arrays With Max Difference
18 June 2025, Leetcode POTD, Medium
Input: nums = [1,3,4,8,7,9,3,5,1], k = 2

Output: [[1,1,3],[3,4,5],[7,8,9]]

Explanation:

The difference between any two elements in each array is less than or equal to 2.
*/

/*In this we need to find the difference of two elem
should be less then k, so if we pick one elem and
pick that elem which is closets to that elem, 
so we can get the less then k, so thats why we can
sort the array, so that closet to currElem, on upon
minus that we can get the less then k and return in
result.
TC: O(nlogn), SC: O(1) is we ignore the result arr
*/
const divideArray = (nums, k) => {
    let len = nums.length;
    let result = [];
    //sort the elem
    nums.sort((a,b) => a-b);

    for(let i=0; i<len; i+=3){
        if(nums[i+2] - nums[i] > k){
            return [];
        }else{
            result.push([nums[i], nums[i+1], nums[i+2]]);
        }
    }
    return result;
}