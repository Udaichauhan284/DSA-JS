/* 904. Fruits Into Baskets
Input: fruits = [1,2,1]
Output: 3
Explanation: We can pick from all 3 trees.
*/

/*In this, we need to find the longest subarray 
with distinct fruits in basket and we have 2 
basket, means we can change this ques,
Find largest subarray which has atmost 2 distinct
fruits.
TC: O(n), SC: O(1) <=2
*/
var totalFruit = function(fruits) {
    let len = fruits.length;
    let low = 0, high = 0;
    let maxLen = 0;
    let unique = new Map();
    while(high < len){
        //now add into the unique
        unique.set(fruits[high], (unique.get(fruits[high]) || 0)+1);

        // Shrink window if more than 2 fruit types
        while(unique.size > 2) {
            unique.set(fruits[low], unique.get(fruits[low]) - 1);
            if (unique.get(fruits[low]) === 0) {
                unique.delete(fruits[low]);
            }
            low++;
        }
        // now find the maxFruits
        maxLen = Math.max(maxLen, high-low+1);
        high++;
    }
    return maxLen;
};

var totalFruit = function(fruits) {
    let len = fruits.length;
    let maxLen = 0;
    for(let i=0; i<len; i++){
        let unique = new Set();
        for(let j=i; j<len; j++){
            unique.add(fruits[j]);
            if(unique.size > 2){
                break;
            }
            maxLen = Math.max(maxLen, j-i+1);
        }
    }
    return maxLen;
};