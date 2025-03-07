/* 2523 Closest Prime Numbers in Range
07 March 25, Leetcode POTD, Maths
Input: left = 10, right = 19
Output: [11,13]
Explanation: The prime numbers between 10 and 19 are 11, 13, 17, and 19.
The closest gap between any pair is 2, which can be achieved by [11,13] or [17,19].
Since 11 is smaller than 17, we return the first pair.
*/

var closestPrimes = function(left, right) {
    let primes = [];

    for(let num=left; num<=right; num++){
        if(isPrime(num) === true){
            if(primes.length > 0 && (num - primes[primes.length-1]) <= 2){
                return [primes[primes.length-1], num];
            }
            primes.push(num);
        }
    }

    let minDiff = Number.MAX_VALUE;
    let result = [-1,-1];
    for(let i=1; i<primes.length; i++){
        let diff = primes[i]-primes[i-1];
        if(diff<minDiff){
            minDiff = diff;
            result = [primes[i-1], primes[i]];
        }
    }
    return result;
};
function isPrime(num){
    if(num <= 1){
        return false;
    }

    for(let div=2; (div*div)<=num; div++){
        if(num % div === 0){
            return false;
        }
    }
    return true;
}