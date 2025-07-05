/*1394. Find Lucky Integer In an Array
05 July 2025, Leetcode POTD EASY
Input: arr = [2,2,3,4]
Output: 2
Explanation: The only lucky number in the array is 2 because frequency[2] == 2.
*/

var findLucky = function(arr) {
    let map = new Map();
    let result = -1;
    for(let num of arr){
        map.set(num, (map.get(num) || 0)+1);
    }
    for(let num of arr){
        if(num === map.get(num)){
            result = Math.max(result, num);
        }
    }
    return result;
};