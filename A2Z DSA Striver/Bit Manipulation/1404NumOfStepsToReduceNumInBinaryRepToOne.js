/* 1404 Number of steps to reduce a number in Binary Representation to One
29 May 2024 - LC POTD, topic: strig, bit manipulation.
Input: s = "1101"
Output: 6
Explanation: "1101" corressponds to number 13 in their decimal representation.
Step 1) 13 is odd, add 1 and obtain 14. 
Step 2) 14 is even, divide by 2 and obtain 7.
Step 3) 7 is odd, add 1 and obtain 8.
Step 4) 8 is even, divide by 2 and obtain 4.  
Step 5) 4 is even, divide by 2 and obtain 2. 
Step 6) 2 is even, divide by 2 and obtain 1.  

*/
/* Method 1- simple do what it was said in question
just even number, least significanet bit is 0, for odd it will 1.
TC: O(n^2), SC: O(1)
*/
var numSteps = function(s){
  let op = 0;
  while(s.length > 1){
    let n = s.length-1;
    if(s[n-1] === "0"){
      //even number, divide it by 2, means pop last bit
      s = s.slice(i,n-1);
    }else{
      //odd, measn add 1 to s
      s = addOne(s);
    }
    op++;
  }
  return op;
}
function addOne(s){
  let i = s.length-1;
  while(i>=0 && s[i] === 1){
    //means right most bit are not 0, measn they are 1, so change to 0
    s = s.slice(0,i) + "0" + s.slice(i+1);
    i--
  }
  if(i < 0){
    //measn i cross left index 0, so add one
    s = "1" + s;
  }else{
    //chnage 0 to 1
    s = s.slice(0,i) + "1" + s.slice(i+1);
  }
  return s;
}

//Method 2 - calculate operation for even and odd
//even make operation +1, odd make operation make +2.
//TC: O(n), SC: O(1).
const numSteps = (s) => {
  let n = s.length;
  let op = 0;
  let carry = 0;
  //move right to left till 1 index. no operation for index 0.
  for(let i=n-1; i>=1; i--){
    if((s.charCodeAt(i) - '0'.charCodeAt(0)+carry)%2 === 1){
      //odd
      op += 2;
      carry = 1;
    }else{
      //even
      op += 1;
    }
  }
  return op+carry; //this carry adding for last index.
}


//26 Feb 2026, leetcode potd, MEDIUM
var numSteps = function(s) {
    let op = 0;
    let carry = 0;
    for(let i=s.length-1; i>=1; i--){
        if((s.charCodeAt(i)-'0'.charCodeAt(0)+carry)%2 === 1){
            op += 2;
            carry = 1;
        }else{
            op += 1;
        }
    }
    return op+carry;
};