/*2206. Divide Array Into Equal Pairs
17 March 25, Leetcode POTD Easy, Set
Input: nums = [3,2,3,2,2,2]
Output: true
Explanation: 
There are 6 elements in nums, so they should be divided into 6 / 2 = 3 pairs.
If nums is divided into the pairs (2, 2), (3, 3), and (2, 2), it will satisfy all the conditions.
*/

/*Method1, use of Set, to have the unique elem
when we iterate over the nums, we see in set
if we already have that elem in set, we remove
it(make a pair), otherwise we add in set
atlast, when set is empty means all pairs done
TC: O(n), SC: O(n)
*/
var divideArray = function(nums) {
    let len = nums.length;
    let set = new Set(); //to store unique
    for(let i=0; i<len; i++){
        if(set.has(nums[i])){
            //if num is already there,
            //we delete it and make a pair
            set.delete(nums[i]);
        }else{
            set.add(nums[i]);
        }
    }
    //now check the length of set
    if(set.size === 0){
        return true;
    }
    return false;
};


/*In Method2, we need to sort the nums and then we need
to do the XOR of adjacent pairs, at that time we will
check if xor is zero if yes return true and if no return
false.
We need to sort, if we dont, then the xor will be zero
for some array, but it wont we equally divided, so thats
why we need to sort and check adjacently
TC: O(nlogn), SC: O(1)
*/
var divideArray = function(nums) {
    //sort the nums
    nums.sort((a,b) => a-b);

    //now start the loop and xor the adjacent and check
    for(let i=1; i<nums.length; i+=2){
        //we are checking adjacent, i.e we need to move
        //+2
        if((nums[i] ^ nums[i-1]) !== 0){
            return false;
        }
    }
    return true;
};



/*Method3, we can sort the nums and check the adjacent
one, if they are not equal, means we cant divide it
according the condition and return false.
TC: O(nlogn), SC: O(1)
*/
var divideArray = function(nums) {
    let len = nums.length;
    //sort the nums
    nums.sort((a,b) => a-b);

    for(let i=1; i<len; i+=2){
        //we are checking adjacent one, so we need to 
        //move the +2 iteration
        if(nums[i] !== nums[i-1]){
            return false;
        }
    }
    return true;
};