/* Set
A set is a data structure that can hold a collection of values. The values however must be unique.
Set can contain a mix of different data types. You can tore strings, booleans, numbers or even objects all in the same set.
Set are dynamically sized. you dont have to declare the size of a set before creating it.

Sets do not maintain an insertion order.
sets are iterables, you can use for of loop.

Set vs Array
Arrays can contain duplicate values wherease Sets cannot.
Insertion Order is maintained in arrays but it is not the case with sets.
Searching and deleteing an element in the set is faster compared to arrays.

*/
const set = new Set([1,2,3]);
console.log(set);
for(let item of set){
  console.log(item);
}
set.add(4) //adding 4 element in set
set.delete(3) //delete that particular element
console.log(set);
console.log(set.has(1));