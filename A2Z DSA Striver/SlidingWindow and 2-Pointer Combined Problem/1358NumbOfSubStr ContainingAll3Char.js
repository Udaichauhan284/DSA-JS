/* 1358. number of substrings containg all three characters.
s = "abcabc"
o/p: 10
*/
 //Brute Method - O(n^2), O(1)
// var numberOfSubstrings = function(s) {
//     let len = s.length;
//     let count = 0;
//     for(let i=0; i<len; i++){
//       let hash = [];
//       for(let j=i; j<len; j++){
//         hash[s.charCodeAt(j) - 'a'.charCodeAt(0)] = 1;

//         if(hash[0]+hash[1]+hash[2] === 3){
//           count += 1;
//         }
//       }
//     }
//     return count;
// };

//Optimal Method - use of Sliding window, "with every char, there is a substring that ends". so take a lastSeen arr and fill it with -1, and travser the arr to see where you finding the subarr, first update the lastSeen for that char with its i(index), then in if condition add in the count of min char. TC : O(n), SC : O(1);
const numberOfSubstrings = (s) => {
  let len = s.length;
  let lastSeen = new Array(3).fill(-1);
  let count = 0;
  for(let i=0; i<len; i++){
    lastSeen[s.charCodeAt(i) - 'a'.charCodeAt(0)] = i;

    if(lastSeen[0] !== -1 && lastSeen[1] !== -1 && lastSeen[2] !== -1){
      count += (1+ Math.min(lastSeen[0], lastSeen[1], lastSeen[2]));
    }
  }
  return count;
}