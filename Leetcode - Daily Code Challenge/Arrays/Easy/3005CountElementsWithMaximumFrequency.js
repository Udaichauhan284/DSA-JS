/* 3005. Count Elements With Maximum Frequency
23 sept 2025, leetcode potd, EASY

Input: nums = [1,2,2,3,1,4]
Output: 4
Explanation: The elements 1 and 2 have a frequency of 2 which is the maximum frequency in the array.
So the number of elements in the array with maximum frequency is 4.
*/

//Using three loops and using map, for maintain the freq
//TC: O(n+n+n)~O(3n)~O(n), SC: O(n)
var maxFrequencyElements = function(nums) {
    let freqs = new Map();
    let maxFreq = 0;
    let count = 0;
    for(let num of nums){
        freqs.set(num, (freqs.get(num) || 0)+1);
    }

    //now set the maxFreq 
    for(let [_,freq] of freqs){
        maxFreq = Math.max(maxFreq, freq);
    }

    //now add in that count
    for(let [_, freq] of freqs){
        if(freq === maxFreq){
            count += freq;
        }
    }
    return count;
};


//Method 2, use of single for loop
//TC: O(n), SC: O(n)
var maxFrequencyElements = function(nums) {
    let freqs = new Map();
    let maxFreq = 0;
    let totalFreq = 0;
    for(let num of nums){
        //now set the num freq in map
        freqs.set(num, (freqs.get(num) || 0)+1);
        //now get the freq of num
        let freq = freqs.get(num);
        //now check the if this freq is greater then maxFreq
        if(freq > maxFreq){
            maxFreq = freq;
            totalFreq = freq;
        }else if(freq === maxFreq){
            totalFreq += freq;
        }
    }
    return totalFreq;
};
