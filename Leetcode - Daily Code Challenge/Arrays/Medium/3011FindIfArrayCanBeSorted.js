/* 3011 Find if array can be sorted
06 Nov 2024, Leetcode POTD, Array, Bubble Sort and Set Bit Count

Input: nums = [8,4,2,30,15]
Output: true
Explanation: Let's look at the binary representation of every element. The numbers 2, 4, and 8 have one set bit each with binary representation "10", "100", and "1000" respectively. The numbers 15 and 30 have four set bits each with binary representation "1111" and "11110".
We can sort the array using 4 operations:
- Swap nums[0] with nums[1]. This operation is valid because 8 and 4 have one set bit each. The array becomes [4,8,2,30,15].
- Swap nums[1] with nums[2]. This operation is valid because 8 and 2 have one set bit each. The array becomes [4,2,8,30,15].
- Swap nums[0] with nums[1]. This operation is valid because 4 and 2 have one set bit each. The array becomes [2,4,8,30,15].
- Swap nums[3] with nums[4]. This operation is valid because 30 and 15 have four set bits each. The array becomes [2,4,8,15,30].
The array has become sorted, hence we return true.
Note that there may be other sequences of operations which also sort the array.
*/

/*Method 1-use of Bubble Sort as we need to swap
two adjacent elements, we will also check for set
bit, if same then we can only swap it, if not we cant swap
it. TC: O(n^2), SC: O(1)
*/
var canSortArray = function(nums) {
    let len = nums.length;
    for(let i=0; i<len; i++){
        let swapped = false;
        for(let j=0; j<len-i-1; j++){
          if(nums[j] <= nums[j+1]){
            //measn no swap required
            continue;
          }
          else{
            //swap required, now check the set bit
            if(countBit(nums[j]) === countBit(nums[j+1])){
                [nums[j], nums[j+1]] = [nums[j+1], nums[j]];
                swapped = true;
            }else{
                return false;
            }
          }
        }
        if(swapped === false){
            break; //measn in inner loop no swapped happened
        }
    }
    return true;
};
function countBit(nums){
    let count = 0;
    while(nums !== 0){
        nums = nums & (nums-1);
        count++;
    }
    return count;
}

/*In method2, we will divide the region of same bit and than we will
find the max and min in that segment and than check for curr segment
min with prevMax. TC: O(n), SC: O(1)
*/
const canSortArray = (nums) => {
    let len = nums.length;
    let minEle = nums[0];
    let maxEle = nums[0];
    let numOfSetBit = countSetBit(nums[0]);

    let maxPrevOfSegment = Number.MIN_VALUE;

    for(let i=1; i<len; i++){
        //now check the set bit of two adjacent
        if(countSetBit(nums[i]) === numOfSetBit){
            //find the max and min of that segment
            minEle = Math.min(maxEle, nums[i]);
            maxEle = Math.max(maxEle, nums[i]);
        }else{
            //measn they dont have same bit and belong into different segment
            //first check the minEle with max of prev
            if(minEle < maxPrevOfSegment){
                return false;
            }
            //update the maxPrev
            maxPrevOfSegment = maxEle;

            //now update the current segment
            minEle = nums[i];
            maxEle = nums[i];
            numOfSetBit = countSetBit(nums[i]);
        }
    }
    if(minEle < maxPrevOfSegment){
        return false;
    }
    return true;
}
function countSetBit(num){
    let count = 0;
    while(num !== 0){
        num = num & (num-1);
        count++;
    }
    return count;
}