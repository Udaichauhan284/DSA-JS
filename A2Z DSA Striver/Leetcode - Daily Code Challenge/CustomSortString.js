/* Custom Sort String
order = "cba" s = "abcd"
output : "cbad"
*/
//Navie: find the all permutation of s and compare with order TC O(n!)
//Optimal Take the map and first count the freq of s and then compare it with order and put it in map and delete the elem, O(n+m), O(n)
const customeSorteOrder = (order,s) => {
  let result = "";
  let map = new Map();

  for(let char of s){
    map.set(char, (map.get(char) || 0)+1);
  }

  //check for order in mao
  for(let char of order){
    if(map.has(char)){
      result += char.repeat(map.get(char));
      map.delete(char);
    }
  }
  //remaining one in map
  for(let [char,count] of map.entries()){
    result += char.repeat(count);
  }

  return result;
}
const s = "abcd";
const order = "cba";
console.log(customeSorteOrder(order,s));