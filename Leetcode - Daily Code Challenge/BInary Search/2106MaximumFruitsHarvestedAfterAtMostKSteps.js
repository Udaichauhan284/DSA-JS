/* 2106. maximum Fruits Harvested After at Most K Steps
03 Aug 2025, Leetcode POTD, HARD
Input: fruits = [[2,8],[6,3],[8,6]], startPos = 5, k = 4
Output: 9
Explanation: 
The optimal way is to:
- Move right to position 6 and harvest 3 fruits
- Move right to position 8 and harvest 6 fruits
You moved 3 steps and harvested 3 + 6 = 9 fruits in total.
*/


/*
Preprocess Input
Build two arrays:
indices: All positions of fruits (sorted)
prefixSum: Prefix sum of fruits at those positions

Two Movement Plans

Try all splits of k into:

Go left d, then right remain

Go right d, then left remain

For each split, calculate the valid [i, j] range (inclusive) of positions you can access.

Binary Search

Use lowerBound and upperBound on indices array to find valid subarray range.

Calculate total fruits using the prefix sum between left and right.

Track the Maximum

Keep updating the maximum fruit count found so far.
TC: O(n*klogn), SC: O(n)
*/
var maxTotalFruits = function(fruits, startPos, k) {
    let len = fruits.length;
    let indices = Array(len).fill(0);
    let prefixSum = Array(len).fill(0);
    //now fill the indices and prefixSum array
    for(let i=0; i<len; i++){
        indices[i] = fruits[i][0];
        prefixSum[i] = fruits[i][1]+(i > 0 ? prefixSum[i-1] : 0);
    }
    let maxFruits = 0;
    //now we need to move d distance, d will move till k/2
    for(let d=0; d<=Math.floor(k/2); d++){
        //Case 1: move left first then right, so need to mius the d in i
        let i = startPos - d;
        let j = startPos + (k-2*d); //2d we need to comeback till startPos then
        //move right, and we move till k steps remaining, i.e k-2d;

        //now range in which we will get the maxFruits
        let left = lowerBound(indices, i);
        let right = upperBound(indices, j)-1;
        //now need to move in left to right to find the maxFruits
        if(left <= right){
            let total = prefixSum[right]-(left > 0 ? prefixSum[left-1] : 0);
            maxFruits = Math.max(maxFruits, total);
        }

        //now Case 2, move right first then left
        i = startPos - (k-2*d);
        j = startPos + d;

        left = lowerBound(indices, i);
        right = upperBound(indices, j)-1;
        if(left <= right){
            let total = prefixSum[right]-(left > 0 ? prefixSum[left-1] : 0);
            maxFruits = Math.max(maxFruits, total);
        }
    }
    return maxFruits;
};
function lowerBound(arr, target){
    let left = 0, right=arr.length;
    while(left < right){
        let mid = left + Math.floor((right-left)/2);
        if(arr[mid] < target){
            left = mid+1;
        }else{
            right = mid;
        }
    }
    return left;
}
function upperBound(arr, target){
    let left = 0, right=arr.length;
    while(left<right){
        let mid = left + Math.floor((right-left)/2);
        if(arr[mid] <= target){
            left = mid+1;
        }else{
            right=mid;
        }
    }
    return left;
}