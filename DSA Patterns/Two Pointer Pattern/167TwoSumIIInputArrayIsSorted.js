/* 167. Two Sum II- Input Array Is Sorted
18 Jan 2026
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
*/

/*
Brute Method, one loop on number and nested loop to find
the target-nums[i]. TC: O(n^2), SC: O(1)

Better Method, we can use the map to store the numbers with
index so we can find the remaining in map in O(1)
TC: O(n), SC: O(n)
*/
var twoSum = function(numbers, target) {
    let len = numbers.length;
    // for(let i=0; i<len; i++){
    //     let remaining = target-numbers[i];
    //     for(let j=0; j<len; j++){
    //         if(numbers[j] === remaining){
    //             return [i+1,j+1];
    //         }
    //     }
    // }

    //Better Method
    let map = new Map();
    for(let i=0; i<len; i++){
        map.set(numbers[i], i+1);
    }

    for(let i=0; i<len; i++){
        let remaining = target - numbers[i];
        if(map.has(remaining)){
            return [i+1, map.get(remaining)];
        }
    }
};



/*Optimal Approach, says that, we can use the 2-pointer
method, left and right, start from 0 and len-1 and 
if the sum of these both are equal to target, return 
the pointer, if sum < target, means we need to increase 
the left one, to increase the sum, if sum > target means
we need to move right one so that we can descrease the
sum. TC: O(n), SC: O(1)
*/
var twoSum = function(numbers, target) {
    let len = numbers.length;
    let left = 0;
    let right = len-1;
    while(left < right){
        let sum = numbers[left]+numbers[right];
        if(sum === target){
            return [left+1, right+1];
        }else if(sum > target){
            //means sum is greater than target, we need
            //to decrease the sum, so for that, move the
            //right pointer
            right--;
        }else{
            left++;
        }
    }
    return [-1,-1];
};