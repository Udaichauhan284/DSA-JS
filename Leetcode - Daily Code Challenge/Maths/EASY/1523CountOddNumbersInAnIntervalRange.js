/*1523. Count Odd Numbers In An Interval Range
07 Dec 2025, leetcode potd, easy
Input: low = 3, high = 7
Output: 3
Explanation: The odd numbers between 3 and 7 are [3,5,7].
*/

//Tc: O(n)
var countOdds = function(low, high) {
    let count=0;
    while(low <= high){
        if(low%2 !== 0){
            count++;
        }
        low++;
    }
    return count;
};

var countOdds = function(low, high) {
    //if we see low and high not odd,
    //we will make it odd, by adding or descreasing 1

    if(low%2 === 0){
        low++;
    }

    if(high%2 === 0){
        high--;
    }

    let check = Math.floor((high-low)/2);
    return check+1;

};