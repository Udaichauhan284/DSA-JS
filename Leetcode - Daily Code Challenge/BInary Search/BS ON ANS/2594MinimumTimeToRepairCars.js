/*2594. Minimum Time To Repair Cars
16 March 25, Leetcode POTD, Array Binary Search on Answer

You are given an integer array ranks representing the ranks of some mechanics. ranksi is the rank of the ith mechanic. A mechanic with a rank r can repair n cars in r * n2 minutes.

You are also given an integer cars representing the total number of cars waiting in the garage to be repaired.

Return the minimum time taken to repair all the cars.

Note: All the mechanics can repair the cars simultaneously.

 

Example 1:

Input: ranks = [4,2,3,1], cars = 10
Output: 16
Explanation: 
- The first mechanic will repair two cars. The time required is 4 * 2 * 2 = 16 minutes.
- The second mechanic will repair two cars. The time required is 2 * 2 * 2 = 8 minutes.
- The third mechanic will repair two cars. The time required is 3 * 2 * 2 = 12 minutes.
- The fourth mechanic will repair four cars. The time required is 1 * 4 * 4 = 16 minutes.
It can be proved that the cars cannot be repaired in less than 16 minutes.​​​​​
*/


/*In this we have multiple way to divide cars
among mechanic, which will give max time to repair
and from those we need to find the Mini time
so we need to find Mini of Max time, we can use
the Binary Search on Answer, low=1, high=maxR*n^2
we will find the mid, which is time, and then 
use the isPossible function to find how many
carFixed in that mid time. carFixed >= cars true
TC: O(n * log(maxR * cars^2)), SC: O(1)
*/
const repairCars = (ranks, cars) => {
    let maxR = Math.max(...ranks);;
    let low = 1;
    let high = maxR * cars * cars;
    let result = -1;
    // apply on BS
    while(low <= high){
        let mid = low + Math.floor((high-low)/2);
        if(isPossible(ranks, cars, mid)){
            result = mid;
            high = mid - 1;
        }else{
            low = mid + 1;
        }
    }
    return result;
}
function isPossible(ranks, cars, mid) {
    let carFixed = 0;
    for(let i=0; i<ranks.length; i++){
        //the original formula time=rank * car^2
        //carsFixed = sqrt(time/rank)
        carFixed += Math.floor(Math.sqrt(mid / ranks[i]));
    }
    return carFixed;
}