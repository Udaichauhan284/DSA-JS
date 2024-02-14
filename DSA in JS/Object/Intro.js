/* Object
An object is an unordered collection of key-value pairs. The key must either be a string or symbol data type where
as the value can be of any data type.

To retrieve a value, you can use the corresponding key. This can be achieved using the dot notation or bracket notation.

An object is not an iterable. You cannot use it with a for of loop.

- Symbol Data Type - it is also primtive data types, It used to represents a unique identifier and can be used in various ways. Symbols are used to create objects properties, for exam- when you want to assign a unique identifier to an object.
*/
//create a symbol
const mySumbol = Symbol();

console.log(mySumbol);
//excpected output: Symbol()

//simple way to create object
const obj = {
  name : "udai",
  age : "24",
  sayMyName : function(){
    console.log(this.name);
  }
}
console.log(obj.name);
console.log(obj["age"]); // using bracket notation age is string

obj.hobby = "skateboard"; // adding new key-value in object
console.log(obj);
delete obj.hobby; // this will delete the hobby in obj
console.log(obj);
obj.sayMyName();

//Object.keys(), .values(), .entries()
console.log(Object.entries(obj));

//Time Complexity
//Insert - O(1)
//Delete - O(1)
//Access - O(1)
//Search - O(n)
//Object.keys() - O(n)
//Object.values() - O(n)
//Object.entries() - O(n)