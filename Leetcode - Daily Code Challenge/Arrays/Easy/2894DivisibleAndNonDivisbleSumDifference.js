/* 2894. Divisible and Non-Divisible Sums DIfference
27 May 25, Leetcode POTD, EASY
Input: n = 10, m = 3
Output: 19
Explanation: In the given example:
- Integers in the range [1, 10] that are not divisible by 3 are [1,2,4,5,7,8,10], num1 is the sum of those integers = 37.
- Integers in the range [1, 10] that are divisible by 3 are [3,6,9], num2 is the sum of those integers = 18.
We return 37 - 18 = 19 as the answer.

*/

/*In Brute Method, we can simply use the for 
loop and check the i divisible by m or not
TC: O(n), SC: O(1)
*/
var differenceOfSums = function(n, m) {
    let num1 = 0;
    let num2 = 0;
    for(let i=1; i<=n; i++){
        if(i%m !== 0){
            num1 += i;
        }else{
            num2 += i;
        }
    }
    return num1-num2;
};




/*In optimal method, we can use the math
which are divisble by m are m, 2m, 3m, 4m
num2 = m+m1+m2..km => num2 = m(1+2+3...k)
nums2 = m(k(k+1)/2)
how to find the k, means how many will be 
divisble by m => do Math.floor(n/m)
find the totalSum = n(n+1)
num1 = totalSum - num2
num1 - num2
n(n+1) - num2 - num2 => n(n+1) - 2(num2)
n(n+1) - 2(mk(k+1)/2)
n(n+1) - mk(k+1)
*/
var differenceOfSums = function(n, m) {
    let k = Math.floor(n / m);
    return (n * (n + 1)) / 2 - m * k * (k + 1);
};