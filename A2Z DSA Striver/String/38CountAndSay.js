/* 38 Count and Say
Input: n = 4

Output: "1211"

Explanation:

countAndSay(1) = "1"
countAndSay(2) = RLE of "1" = "11"
countAndSay(3) = RLE of "11" = "21"
countAndSay(4) = RLE of "21" = "1211"
*/

/*Count and Say measn, see before iteration and check how
many times a number is written
n=1 -> 1
n=2 -> check above (n==1) "1 times 1 is written" 11
n=3 -> check above "2 times 1 is wriiten" "21"
TC: O(n), SC: O(n) auxilary stack space.
*/
var countAndSay = function (n) {
  //base case
  if (n === 1) {
    return "1";
  }
  let say = countAndSay(n - 1);
  //processing start
  let result = "";
  for (let i = 0; i < say.length; i++) {
    let char = say[i];
    let count = 1;
    while (i < say.length - 1 && say[i] === say[i + 1]) {
      count++;
      i++;
    }
    result += +count + char;
  }
  return result;
};

/*Iterative Method
 */
var countAndSay = function (n) {
  if (n === 1) return "1";
  let res = "1";
  for (let i = 2; i <= n; i++) {
    let next = "";
    let char = res[0];
    let count = 1;
    for (let j = 1; j < res.length; j++) {
      if (res[j] === char) {
        count++;
      } else {
        next += +count + char;
        char = res[j];
        count = 1;
      }
    }
    next += +count + char;
    res = next;
  }
  return res;
};



/*In this we can use the Recursion
for n=1 ans is "1", so we can send for n-1
TC: O(2^n), SC: O(n)
*/
var countAndSay = function(n) {
  //base case
  if(n === 1){
      return "1";
  }

  let say = countAndSay(n-1);
  let result = "";
  //now process on say
  for(let i=0; i<say.length; i++){
      let char = say[i];
      let count = 1;
      while(i < say.length-1 && say[i] === say[i+1]){
          count++;
          i++; //increment i
      }

      result += +count + char; // changing count to string
  }
  return result;
};
