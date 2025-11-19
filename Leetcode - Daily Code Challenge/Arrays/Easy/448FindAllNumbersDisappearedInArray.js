/*448. Find All Numbers Disappeared in an Array
20 Nov 2025, Leetcode potd, easy
Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
*/

/*For brute force, we can take the set and then see,
if we have that number in set or not
TC: O(2n), SC: O(n)
*/
var findDisappearedNumbers = function(nums) {
    let ans = [];
    let set = new Set();
    for(let num of nums) set.add(num);
    for(let i=1; i<=nums.length; i++){
        if(set.has(i)) continue;
        else ans.push(i);
    }
    return ans;
};

/*Optimal Method, for that we need to make
the same pos index value marked seen, then
we again traverse the arr and see if that
one is not marked seen, we return it
TC: O(2n), SC: O(1)
*/
var findDisappearedNumbers = function(nums) {
    let len = nums.length;
    //now traverse over the array and mark the pos, respected index visited
    for(let i=0; i<len; i++){
        let index = Math.abs(nums[i])-1;
        //now check that index val
        if(nums[index] > 0){
            //mark that one neg
            nums[index] *= -1; 
        }
    }

    //now again travser it and see the non-negative one
    let ans = [];
    for(let i=0; i<len; i++){
        if(nums[i] > 0){
            ans.push(i+1);
        }
    }
    return ans;
};