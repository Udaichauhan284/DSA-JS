/*Max Sum Subarray of Size K
22 Jan 2026, leetcode potd, medium
Input: arr[] = [100, 200, 300, 400], k = 2
Output: 700
Explanation: arr2 + arr3 = 700, which is maximum.
*/

class Solution {
    maxSubarraySum(arr, k) {
        // code here
        //Brute Method, use of nested loop, go till len-2 and then search for j=i to j<=i+k
        let len = arr.length;
        let maxSum = Number.MIN_VALUE;
        for(let i=0; i<=len-k; i++){
            let currSum = 0;
            for(let j=i; j<i+k; j++){
                //i+k means we are going till i+k, only 2 size window
                currSum += arr[j];
            }
            maxSum = Math.max(maxSum, currSum);
        }
        return maxSum;
    }
    //Tc: O(n*k), SC: O(1)
}

//Optimal Method use of Sliding Window
function maxSubarraySum(arr, k) {
        // code here
        //Use of Sliding Window, use of low and high pointer
        let len = arr.length;
        let low = 0, high = 0;
        let windowSum = 0, maxSum = 0;
        while(high < len){
            windowSum += arr[high];
            
            //if window exceed, remove the left one
            if(high-low+1 > k){
                windowSum -= arr[low];
                low++; //after removing it from sum, shrink the window
            }
            
            //now window is same size of k
            if(high-low+1 === k){
                maxSum = Math.max(maxSum, windowSum);
            }
            high++;
        }
        return maxSum;
}