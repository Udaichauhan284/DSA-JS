/*3074. Apple Redistribution into Boxes
24 Dec 2025, leetcode potd, EASY
Input: apple = [1,3,2], capacity = [4,3,1,5,2]
Output: 2
Explanation: We will use boxes with capacities 4 and 5.
It is possible to distribute the apples as the total capacity is greater than or equal to the total number of apples.
*/

/*Method 1, use of simple Sort, in this we will
add total apple, and sort the capacity with
descreasing order,so most apple can taken in 
box of larger capacity at first.
TC: O(n + mlogm), SC:O(1)
*/
var minimumBoxes = function(apple, capacity) {
    //sort the capcity
    capacity.sort((a,b) => b-a);
    //now find the total sum of apple
    let totalSum = 0;
    for(let a of apple){
        totalSum += a;
    }

    //now find the count, iterate over totalSum
    //and capacity
    let count = 0;
    let i = 0;
    while(totalSum > 0){
        totalSum -= capacity[i];
        count++;
        i++; //for iteration over capacity
    }
    return count;
};

/*Method 2: use of count sort, in this we need 
the freq array, so we will maintain the freq of 
capacity, and minus till totalApple not zero.
TC: O(n+m), SC: O(51)~O(1)
*/
var minimumBoxes = function(apple, capacity) {
    let totalApple = apple.reduce((acc, curr) => acc+curr, 0);
    let freq = Array(51).fill(0);
    for(let cap of capacity){
        freq[cap]++;
    }
    let count = 0;
    //now we will need to traverse back
    for(let cap=50; cap>=1 && totalApple > 0; cap--){
        //now check in freq and totalApple
        while(freq[cap] > 0 && totalApple > 0){
            freq[cap]--;
            totalApple -= cap;
            count++;
        }
    }
    return count;
};