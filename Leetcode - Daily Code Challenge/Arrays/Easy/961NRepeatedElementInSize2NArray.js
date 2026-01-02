/* 961. N-Repeated Element in Size 2N Array
02 Jan 2025, leetcode potd, easy

*/

var repeatedNTimes = function(nums) {
    let len = nums.length;
    let map = new Map();
    for(let num of nums){
        map.set(num, (map.get(num) || 0)+1);
    }
    for(let [key, value] of map){
        if(len === value * 2){
            return key;
        }
    }
    return null;
};