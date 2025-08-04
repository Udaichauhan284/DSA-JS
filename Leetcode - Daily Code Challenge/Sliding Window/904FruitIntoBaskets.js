/* 904. Fruit Into Baskets
04 Aug 2025, Leetcode POTD, Medium
Input: fruits = [0,1,2,2]
Output: 3
Explanation: We can pick from trees [1,2,2].
If we had started at the first tree, we would only pick from trees [0,1].
*/

/*In this we need to iterate using two pointer, 
Sliding Window, need to find the largest window with
atmost 2 unique elements,
TC: O(n), SC: O(1) 
*/
var totalFruit = function(fruits) {
    let len = fruits.length;
    let left = 0, right = 0;
    let count = 0;
    let freq = new Map();
    //sliding window
    while(right < len){
        //now push the fruits in freq map
        freq.set(fruits[right], (freq.get(fruits[right]) || 0)+1);
        //now check if the size of map is less then 2
        if(freq.size <= 2){
            //find the count distance, max fruits type
            count = Math.max(count, (right-left+1));
        }else{
            //if freq map size is greater then 2, shrink the window
            freq.set(fruits[left], (freq.get(fruits[left]))-1);
            if(freq.get(fruits[left]) === 0){
                //if the freq of that fruits in map, is zero, delete it
                freq.delete(fruits[left]);
            }
            left++; //move the left pointer
        }
        right++;
    }
    return count;
};