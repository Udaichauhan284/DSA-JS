/* Map
A map is an unordered collection of key-value pairs. Both keys and values can be of any data type.
To retrieve a value, you can use the corresponding key.
Maps are iterables. They can be used with a for of loop.

Object vs Map
-Objects aare unordered whereas maps are ordered.
-Keys in objects can only be string or symbol type whereas in maps, they can be of any type
-An object has a prototype and may contain a few default keys which may collide with your own keys if you are not careful. A map on the other hand does not contain any keys by default.
-Objects are not iterables where as maps are iterable.
-The number of items in an object must be determined manually where as it is readily available with the size property in a map.
Apart from stroing data you can attach functinality to an object whereas maps are restricted to just storing data.
-Iteration happesn in insertion order.
*/
const map = new Map([['a',1], ['b',2]]);
for(let [key,value] of map){
  console.log(key, value);
}
map.set(['c',3]) //this is how we add in map using .set
console.log(map)

console.log(map.has('a')); //checking it is there or not.