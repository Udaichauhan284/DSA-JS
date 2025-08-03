/*898. Bitwise ORs of subarrays
31 July 2025, Leetcode POTD
Input: arr = [0]
Output: 1
Explanation: There is only one possible result: 0.
*/

var subarrayBitwiseORs = function(arr) {
    let prev = new Set();
    let result = new Set();

    for (let i = 0; i < arr.length; i++) {
        let curr = new Set();

        for (let x of prev) {
            curr.add(x | arr[i]);
            result.add(x | arr[i]);
        }

        curr.add(arr[i]);
        result.add(arr[i]);

        prev = curr;
    }

    return result.size;
};


/*In Brute Method, we iterate over the arr
and start finding the OR for subarrays
and add in set, so at last we will get the
uniqueOR length. TC: O(n^2), SC: O(n)
this will give the TLE, 

in method 2
so we need to maintain
the prev values of OR also so we dont need
to iterate nested.
*/
var subarrayBitwiseORs = function(arr) {
    let len = arr.length;
    let uniqueOR = new Set();
    for(let i=0; i<len; i++){
        let currOR = arr[i];
        for(let j=i; j<len; j++){
            currOR |= arr[j];
            uniqueOR.add(currOR);
        }
    }
    return uniqueOR.size;
};


/*In method2, we will maintain the prev set
to store the prev OR, so while calculate OR for
currOne, we will use the prev OR vals
TC: O(n*32)~O(n), in set we will maintain the 32 bits
SC: O(n*32)~O(n)
*/
var subarrayBitwiseORs = function(arr) {
    let len = arr.length;
    let prev = new Set();
    let uniqueOR = new Set();

    for(let i=0; i<len; i++){
        let currOne = new Set();
        for(let x of prev){
            currOne.add(x | arr[i]);
            uniqueOR.add(x | arr[i]);
        }
        //now add the single elem, which is also
        //subarrays
        currOne.add(arr[i]);
        uniqueOR.add(arr[i]);
        //now change the prev to curr
        prev = currOne;
    }
    return uniqueOR.size;
};