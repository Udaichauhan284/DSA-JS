/* 1371 Find The longest substring containing vowels in even counts
15 sept 2024, leetcode POTD, String, BIt Manupilations, Map

Input: s = "leetcodeisgreat"
Output: 5
Explanation: The longest substring is "leetc" which contains two e's.
*/

/*Method 1 use of state which is arr for vowels, will
travering the string, we keep chaning the state of vowels
is 1 measn odd times and 0 measn even time and keep storing
in map, to check if we see this before or not
TC: O(n), SC: O(n)
*/
var findTheLongestSubstring = function(s) {
  let map = new Map(); //for maintain the state
  let currState = "00000"; //a,e,i,o,u
  let result = 0;
  map.set(currState, -1);
  let state = Array(5).fill(0); //array for vowels

  for(let i=0; i<s.length; i++){
      if(s[i] === "a"){
          state[0] = (state[0] + 1) % 2; //mod2 for even or out
      }else if(s[i] === "e"){
          state[1] = (state[1] + 1) % 2;
      }else if(s[i] === "i"){
          state[2] = (state[2] + 1) % 2;
      }else if(s[i] === "o"){
          state[3] = (state[3] + 1) % 2;
      }else if(s[i] === "u"){
          state[4] = (state[4] + 1) % 2;
      }
      //set again currState
      currState = ""; //as we are creating new currState
      for(let j=0; j<5; j++){
          currState += String(state[j]);
      }
      //now check that currState in map
      if(map.has(currState)){
          result = Math.max(result, i - map.get(currState));
      }else{
          map.set(currState, i);
      }
  }
  return result;
};


/*Method 2 same as method 1, just we use XOR rather then adding 1 and mod2
XOR of same will give you 0 which measn even, and 1 asa odd, so with that
we set the state
TC: O(n), SC: O(n)
*/
var findTheLongestSubstring = function(s) {
  let map = new Map(); //for maintain the state
  let currState = "00000"; //a,e,i,o,u
  let result = 0;
  map.set(currState, -1);
  let state = Array(5).fill(0); //array for vowels

  for(let i=0; i<s.length; i++){
      if(s[i] === "a"){
          state[0] = state[0] ^ 1;
      }else if(s[i] === "e"){
          state[1] = state[1] ^ 1;
      }else if(s[i] === "i"){
          state[2] = state[2] ^ 1;
      }else if(s[i] === "o"){
          state[3] = state[3] ^ 1;
      }else if(s[i] === "u"){
          state[4] = state[4] ^ 1;
      }
      //set again currState
      currState = ""; //as we are creating new currState
      for(let j=0; j<5; j++){
          currState += String(state[j]);
      }
      //now check that currState in map
      if(map.has(currState)){
          result = Math.max(result, i - map.get(currState));
      }else{
          map.set(currState, i);
      }
  }
  return result;
};


/*Method 3 in this we dont need currState and state array for vowels
we just use mask adn in for loop on string we check for vowels and when we 
find we change the mask value mask ^ (1 left shift by 0 in case of a) and
so on
TC: O(n), SC: O(1)
*/
var findTheLongestSubstring = function(s) {
  let map = new Map(); //for maintain the state
  let mask = 0; //binary form 00000 for a,e,i,o,u
  let result = 0;
  map.set(mask, -1);

  for(let i=0; i<s.length; i++){
      if(s[i] === "a"){
          mask = mask ^ (1 << 0);
      }else if(s[i] === "e"){
          mask = mask ^ (1 << 1);
      }else if(s[i] === "i"){
          mask = mask ^ (1 << 2);
      }else if(s[i] === "o"){
          mask = mask ^ (1 << 3);
      }else if(s[i] === "u"){
          mask = mask ^ (1 << 4);
      }

      //now check that currState in map
      if(map.has(mask)){
          result = Math.max(result, i - map.get(mask));
      }else{
          map.set(mask, i);
      }
  }
  return result;
};