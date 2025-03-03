/*2161. Partition Array According to Given Pivot
03 Mar 25, Leetcode POTD, Array Medium
Input: nums = [9,12,5,10,14,3,10], pivot = 10
Output: [9,5,3,10,10,12,14]
Explanation: 
The elements 9, 5, and 3 are less than the pivot so they are on the left side of the array.
The elements 12 and 14 are greater than the pivot so they are on the right side of the array.
The relative ordering of the elements less than and greater than pivot is also maintained. [9, 5, 3] and [12, 14] are the respective orderings.
*/

/*Approach 1, use of 3 vectors for numLessPivot
, numEqualPivot and numGreaterPivot
TC: O(3n)~O(n), SC: O(3n)~O(n)
*/
var pivotArray = function(nums, pivot) {
    let lessNum = [];
    let equalNum = [];
    let greaterNum = [];

    for(let num of nums){
        if(num < pivot){
            lessNum.push(num);
        }else if(num === pivot){
            equalNum.push(num);
        }else{
            greaterNum.push(num);
        }
    }

    //now if loop on equal and greater arr
    for(let num of equalNum){
        lessNum.push(num);
    }
    for(let num of greaterNum){
        lessNum.push(num);
    }

    return lessNum;
};




/*Method 2, use of pointers, in this we count
lessNum and equal and then we take 3 pointer
i=0, j=from lessNUm and k from less+equal num
to fill the array.
TC: O(n), SC: O(1)
*/
var pivotArray = function(nums, pivot) {
    let len = nums.length;
    let countLess = 0;
    let countEqual = 0;

    for(let i=0; i<len; i++){
        if(nums[i] < pivot){
            countLess++;
        }else if(nums[i] === pivot){
            countEqual++;
        }
    }

    let ptrLess = 0;
    let ptrEqual = countLess; //start from less
    let ptrGreat = countLess+countEqual;

    let result = [];
    for(let i=0; i<len; i++){
        if(nums[i] < pivot){
            result[ptrLess] = nums[i];
            ptrLess++;
        }else if(nums[i] === pivot){
            result[ptrEqual] = nums[i];
            ptrEqual++;
        }else{
            result[ptrGreat] = nums[i];
            ptrGreat++;
        }
    }
    return result;
};