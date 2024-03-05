/* 451. Sort Characters By Frequency
s="tree" o/p=> "eert"
*/
//Map->arr(sort based om freq)->map to string
const sortByFreq = (s) => {
  let len = s.length;
  let map = new Map();
  for(let i=0; i<len; i++){
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }
  let arr = [...map];
  arr.sort((a,b) => b[1]-a[1]);

  let str = arr.map(([char,freq]) => 
    char.repeat(freq)
  ).join('');

  return str;
}
console.log(sortByFreq("tree"));
console.log(sortByFreq("Aabb"));