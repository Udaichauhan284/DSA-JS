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

/*Use of Rabin Karp Alogrithm
TC: Average case O(n-m+1), worst case O(nm)
*/
var repeatedStringMatch = function (a, b) {
  const base = 256; //number of char in the i/p alphabates
  const mod = 101;

  //hash for stirng
  const hash = (str, len) => {
    let h = 0;
    for (let i = 0; i < len; i++) {
      h = (base * h + str.charCodeAt(i)) % mod;
    }
    return h;
  };
  //Rabin Kard Algo
  const rabinKarp = (text, pattern) => {
    let m = pattern.length;
    let n = text.length;
    let hPattern = hash(pattern, m);
    let hText = hash(text, m);
    const h = Math.pow(base, m - 1) % mod;

    for (let i = 0; i <= n - m; i++) {
      if (hPattern === hText) {
        let match = true;
        for (let j = 0; j < m; j++) {
          if (text[i + j] !== pattern[j]) {
            match = false;
            break;
          }
        }
        if (match) return true;
      }
      //rolling hash
      if (i < n - m) {
        hText =
          (base * (hText - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) %
          mod;
        if (hText < 0) hText += mod;
      }
    }
    return false;
  };

  //main code
  let repeated = a;
  let count = 1;
  while (repeated.length < b.length) {
    repeated += a;
    count++;
  }
  if (rabinKarp(repeated, b)) {
    return count;
  } else {
    repeated += a;
    count++;
    if (rabinKarp(repeated, b)) {
      return count;
    }
  }
  return -1;
};
