/* 977. Squares of a sorted array
18 jan 2026, leetcode easy
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
*/

/*Brute Method, take an another array and
fill it with square of the main arr elem
and then sort it
TC: O(nlogn), SC: O(n)
*/
var sortedSquares = function(nums) {
    let len = nums.length;
    let squareArr = Array(len).fill(-1);
    for(let i=0; i<len; i++){
        squareArr[i] = (nums[i]*nums[i]);
    }
    return squareArr.sort((a,b) => a-b);
};



/* Optimal Method, in this we can divide the array
by pos and neg, and then we can merge it two sorted
array using 2-pointer method
TC: O(n), SC: O(1)
*/
var sortedSquares = function(nums) {
    let len = nums.length;
    let pos = [], neg = [];
    //now start dividing the elem based on pos n neg
    for(let i=0; i<len; i++){
        if(nums[i] < 0){
            neg.push(nums[i]);
        }else{
            pos.push(nums[i]);
        }
    }

    //now check if we only have pos numbers
    if(neg.length === 0){
        //means we only have pos eleme, return simple
        for(let i=0; i<pos.length; i++){
            pos[i] = pos[i]*pos[i];
        }
        return pos;
    }

    //now check if we only have neg numbers
    if(pos.length === 0){
        //measn we only have neg ones, return square
        for(let i=0; i<neg.length; i++){
            neg[i] = neg[i]*neg[i];
        }
        //now need to reverse it, becasue sqr in desc
        return neg.reverse();
    }

    //now merge the sorted array
    let m = pos.length;
    let n = neg.length;
    let res = Array(m+n).fill(-1);

    return mergeSortedArr(pos,neg,m,n,res);
};
function mergeSortedArr(pos, neg, m, n, res){
    //first have the square of both
    for(let i=0; i<m; i++){
        pos[i] = pos[i]*pos[i];
    }
    for(let i=0; i<n; i++){
        neg[i] = neg[i]*neg[i];
    }
    //need to reverse it
    neg.reverse();

    //now start merging 
    let idx = 0;
    let left = 0, right = 0;
    while(left < m && right < n){
        if(pos[left] < neg[right]){
            res[idx] = pos[left];
            idx++;
            left++;
        }else{
            res[idx] = neg[right];
            idx++;
            right++;
        }
    }

    while(left < m){
        res[idx] = pos[left];
        idx++;
        left++;
    }

    while(right < n){
        res[idx] = neg[right];
        idx++;;
        right++;
    }
    return res;
}