/* 386 Lexicographical Numbers
21 Sept 2024, leetcode POTD
Input: n = 13
Output: [1,10,11,12,13,2,3,4,5,6,7,8,9]
*/

/*In this we can use Recursion DFS, we need to go deep in one 
num, start=1, then call function go for 10 check and again
TC: O(n) each num is traversed by one
SC: O(no of digit of n) O(logn)
*/
var lexicalOrder = function(n) {
  let result = [];
  //now in loop we will go from 1 to 9 to form the all num
  for(let startNum=1; startNum<=9; startNum++){
      solve(startNum, n, result);
  }
  return result;
};
function solve(curr, limit, result){
  if(curr > limit){
      return;
  }
  //now add into result
  result.push(curr);
  //now we need to append more digit to check <n
  for(let append=0; append<=9; append++){
      let newNum = curr * 10 + append;
      if(newNum > limit){
          return;
      }
      solve(newNum, limit, result);
  }
}


/*Method 2- use of Iterative way, in this we multiple 1 with 10
and then we will check if <n then we add in result, otherwise
we move to else and check if curr > n || curr%10 === 9 this 
means we need to increase the curr, take first value of curr
curr = curr / 10,then we increse the curr. TC: O(n), SC: O(1)
*/
const lexicalOrder1 = (n) => {
  let result = [];
  let curr = 1;
  for(let i=0; i<n; i++){
    result.push(curr);
    if(curr*10 <= n){
      curr = curr * 10;
    }else{
      //measn curr*10 is bigger than n and maybe at last it have 9, need ot move curr
      while(curr >= n || curr%10 === 9){
        curr = Math.floor(curr / 10);
      }
      curr = curr + 1;
    }
    return result;
  }
}



/*08 June 25, leetcode POTD
Method 1: use of Recursion DFS, we pick the num and move into depth
and check and then see if we able to form this and newNum is less then
n.
TC: O(n), SC: O(no. of digit)
*/
var lexicalOrder = function(n) {
    let result = [];
    for(let startNum=1; startNum<=9; startNum++){
        solve(startNum, n, result);
    }
    return result;
};
function solve(curr, limit, result){
    //base condition
    if(curr > limit) return;
    //if not, put into the result arr
    result.push(curr);
    for(let append=0; append <= 9; append++){
        let newNum = curr * 10 + append;
        if(newNum > limit) return;
        solve(newNum, limit, result);
    }
}