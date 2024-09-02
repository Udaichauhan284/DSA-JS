/* 1894. Find the STudent that will replace the chalk - Medium
02 Sept 2024, Leetcode POTD

Input: chalk = [5,1,5], k = 22
Output: 0
Explanation: The students go in turns as follows:
- Student number 0 uses 5 chalk, so k = 17.
- Student number 1 uses 1 chalk, so k = 16.
- Student number 2 uses 5 chalk, so k = 11.
- Student number 0 uses 5 chalk, so k = 6.
- Student number 1 uses 1 chalk, so k = 5.
- Student number 2 uses 5 chalk, so k = 0.
Student number 0 does not have enough chalk, so they will have to replace it.
*/


/*Method 1- simulation method, do what asked, outer loop
will runs till k === 0, and inside for loop willgo for
one iteration of chalk. outer loop TC - one iteration sum 
will divde k * n
TC: O(k/sum * n), SC: O(1)
TLE
*/
var chalkReplacer = function(chalk, k) {
  let len = chalk.length;
  while(true){ //this loop runs till k===0
      for(let i=0; i<len; i++){
          if(k < chalk[i]){
              return i;
          }
          k -= chalk[i];
      }
  }
};


/*Method 2- in one iteration the sum of iteration, then we 
will how many iteration that will can happen, k/sum
and in last how many remaining k remaining which consumed
by which index, knowing the Remaining k%sum
TC:O(n), SC: O(1)
*/
var chalkReplacer = function(chalk, k) {
  let len = chalk.length;
  let totalChalkSum = 0;
  for(let elem of chalk){
      totalChalkSum += elem;
      if(totalChalkSum > k){
          break;
      }
  }

  let remainingChalk = k%totalChalkSum;
  for(let i=0; i<len; i++){
      if(remainingChalk < chalk[i]){
          return i;
      }
      remainingChalk -= chalk[i];
  }
  return -1;
};