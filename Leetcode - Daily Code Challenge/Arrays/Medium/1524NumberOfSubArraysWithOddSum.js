/*1524. Number of Sub-arrays with odd sum
25 Feb 25, Leetcode POTD Array medium
Input: arr = [1,3,5]
Output: 4
Explanation: All subarrays are [[1],[1,3],[1,3,5],[3],[3,5],[5]]
All sub-arrays sum are [1,4,9,3,8,5].
Odd sums are [1,9,3,5] so the answer is 4.
*/

/*Brute Method, use of 3 nested loop
i=0,j=i and k=itoj, TC: O(n^3),SC: O(1)
*/
var numOfSubarrays = function(arr) {
    let len = arr.length;
    let count = 0;
    let mod = 10e7;
    for(let i=0; i<len; i++){
        for(let j=0; j<len; j++){
            let sum = 0;
            for(let k=i; k<=j; k++){
                sum += arr[k];
            }
            if(sum % 2 !== 0){
                count++;
            }
        }
    }
    return count%mod;
};


/*Better Approach, use of two loops
TC: O(n^2), SC: O(1)
*/
var numOfSubarrays = function(arr) {
    let len = arr.length;
    let count = 0;
    let mod = 10e7;

    for(let i=0; i<len; i++){
        let sum = 0;
        for(let j=i; j<len; j++){
            sum += arr[j];

            if(sum % 2 !== 0){
                count++;
            }
        }
    }
    return count%mod;
};


/*Optimal Method, this ques is same as subarray sum equals to 0
in this we maintain the prefix sum and we see the even and odd
even+odd=odd, odd+even=odd, when in prefix sum we see the odd, we will
see the previous even, and if we see the even we see the previous odd
even count start from 1, because prefix sum=0 start with 0
TC: O(n), SC: O(n) prefix sum arr space
*/
var numOfSubarrays = function(arr) {
    let mod = 1e9 + 7;
    let len = arr.length;
    let prefix = Array(len).fill(0);
    //first elem will be same
    prefix[0] = arr[0];

    //now find the prefix sum
    for(let i=1; i<len; i++){
        prefix[i] = prefix[i-1]+arr[i];
    }

    let count = 0;
    let oddSumCount = 0;
    let evenSumCount = 1; //prefix sum first 0 is consider as even

    for(let i=0; i<len; i++){
        if(prefix[i] % 2 === 0){
            //measn we have even now, so check prev ODD
            //even + odd = odd
            count = (count + oddSumCount) % mod;
            evenSumCount++;
        }else{
            //means we have odd now, so check the prev EVEN
            //odd + even = odd
            count = (count + evenSumCount) % mod;
            oddSumCount++;
        }
    }
    return count;
};


/*Method 4 optimal method , but without use of Extra space, just use
of variable. TC: O(n), SC: O(1)
*/
var numOfSubarrays = function(arr) {
    let len = arr.length;
    let mod = 1e9 + 7;
    let sum = 0;

    let evenSumCount = 1;
    let oddSumCount = 0;
    let count = 0;

    for(let i=0; i<len; i++){
        sum += arr[i];

        if(sum % 2 === 0){
            //measn we have even, so check prev odd count
            //even + odd = odd
            count = (count + oddSumCount) % mod;
            evenSumCount++;
        }else{
            //meas we have odd, so check prev even Count
            //odd+even = odd
            count = (count + evenSumCount) % mod;
            oddSumCount++;
        }
    }
    return count;
};