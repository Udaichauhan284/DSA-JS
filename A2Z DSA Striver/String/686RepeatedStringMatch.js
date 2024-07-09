/* 686 Repeated String Match
Input: a = "abcd", b = "cdabcdab"
Output: 3
Explanation: We return 3 because by repeating a three times "abcdabcdabcd", b is a substring of it.
*/

/*For checking that b is part of a, first we need to make a size
of b. so that we can check, b is part of a.
T: O(n)+O(n), SC: O(n)
*/
var repeatedStringMatch = function (a, b) {
  let res = a;
  let count = 1;
  while (res.length < b.length) {
    res += a;
    count++;
  }
  if (res.includes(b)) {
    return count;
  } else {
    //above if  condition return false, b is not partof a
    res += a;
    count++;
    if (res.includes(b)) {
      return count;
    }
  }
  return -1;
};
