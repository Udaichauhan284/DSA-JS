/* 3005. Count Elements With Maximum Frequency
23 sept 2025, leetcode potd, EASY

Input: nums = [1,2,2,3,1,4]
Output: 4
Explanation: The elements 1 and 2 have a frequency of 2 which is the maximum frequency in the array.
So the number of elements in the array with maximum frequency is 4.
*/

var maxFrequencyElements = function(nums) {
    let map = new Map();
    let maxFreq = 0;
    for(let num of nums){ //O(n)
        map.set(num, (map.get(num) || 0)+1);
    }
    for(let [_, freq] of map){ //O(n)
        maxFreq = Math.max(maxFreq, freq);
    }
    //see how many have same maxFreq;
    let count = 0;
    for(let [_,freq] of map){ //O(n)
        if(freq === maxFreq){
            count += freq;
        }
    }
    return count;
};


//TC: O(n), SC: O(n)
var maxFrequencyElements = function(nums) {
    let freqs = new Map();
    let totalFreq = 0;
    let maxFreq = 0;
    for(let num of nums){
        freqs.set(num, (freqs.get(num) || 0)+1);
        let freq = freqs.get(num);

        //if we get the freq higger then maxFreq
        //we will change it
        if(freq > maxFreq){
            maxFreq = freq;
            totalFreq = freq;
        }else if(freq === maxFreq){
            totalFreq += freq;
        }
    }
    return totalFreq;
};
