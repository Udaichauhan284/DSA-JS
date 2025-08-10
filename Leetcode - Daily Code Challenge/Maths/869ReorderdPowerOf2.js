/* 869. Reordered Power of 2
10 Aug 2025, leetcode POTD, Medium
You are given an integer n. We reorder the digits in any order (including the original order) such that the leading digit is not zero.

Return true if and only if we can do this so that the resulting number is a power of two.
*/

//TC: O(dlogd), SC: O(s)
var reorderedPowerOf2 = function(n) {
    //make that number sorted
    let sortedN = getSortedString(n);

    //now we need to check the every power of 2
    //number is that equal to sortedN
    for(let p=0; p<=29; p++){ //TC: O(29 * dlogd)
        // If the sorted digits match with any power of 2's sorted digits → return true
        if(sortedN === getSortedString(1 << p)){
            return true;
        }
    }
    return false;
};
function getSortedString(num) {
    //TC: O(dlogd), d time sorting
    return num
        .toString()   // Convert number to string
        .split('')    // Split into characters (digits)
        .sort((a, b) => a - b) // Sort digits numerically
        .join('');    // Join back into a string
}



/*This code checks if the digits of n can be rearranged to form a power of 2.
Instead of sorting digits, it creates a unique “digit signature” by summing 10^digit for each digit.
Then it compares this signature with the signature of every power of 2 from 1 to 2^29.
TC: O(29logn) ~ O(logn), SC: O(1)
*/
var reorderedPowerOf2 = function(n) {
    // Get the "digit power sum" representation of n
    let num = getPowerNum(n); //logbase10n ~ logn

    // Check all powers of 2 from 2^0 to 2^29
    // (2^30 > 10^9, so no need to check further)
    for (let p = 0; p <= 29; p++) {
        // Compare digit power sum with that of the current power of 2
        if (num === getPowerNum(1 << p)) {
            return true; // Found a matching digit multiset
        }
    }
    return false; // No match found
};

function getPowerNum(n) {
    let num = 0;
    // Create a "digit signature" using powers of 10 as positional markers
    // Example: n = 25 → 10^5 (for digit 5) + 10^2 (for digit 2)
    while (n > 0) {
        let digit = n % 10;              // Get last digit
        num += Math.pow(10, digit);      // Add its contribution
        n = Math.floor(n / 10);          // Remove last digit
    }
    return num;
}