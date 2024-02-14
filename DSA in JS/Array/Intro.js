// An array is a data structure that can hold a collection of values.
// Arrays can contain a mix of different data types. You can store strings, booleans, numbers or even objects all in the same array.
// Arrays are resizeable. You dont have to declare the size of an array before creating it.
// JS arrays are zero-indexed and the insertion order is maintained.
// Arrays are iterables. Thye can be used with a for of loop

const arr = [1,2,3,"udai"];
arr.push(4) // it will add 4 at last
arr.unshift(0) //it will add 0 at start
console.log(arr);

arr.pop(); // it will remove element at last
arr.shift(); // it will remove element at start
for(let items of arr){
  console.log(items);
}

// Difference between Slice and Splice in JS
// "Slice"
/* 
1. the slice methods is used to extract the portion of an array and return it in a new array.
2. It takes two parameters the starting index (inclusive) and ending index(exclusive). If the ending index is not specified, it extract elements untill the end of the array.
3. The original array is not modified, 'slice' creates a new array and return a new array containing the selected elements.
*/
const originalArr = [1,2,3,4,5];
const sliceArr = originalArr.slice(1,4);
console.log(sliceArr); //[2,3,4]
console.log(originalArr); // [1,2,3,4,5]

// splice
/* 
1. The splice method is used to change the contents of an array by removing or replacing existing elements and/or adding new elements in place.
2. it takes multiple parameters, including the starting index, the number of elements to remove and optional elements to add.
3. The original array is modified by the 'splice' operations.
*/
const originalArray = [1,2,3,4,5];
const removedElements = originalArray.splice(1,2,10,20);
console.log(removedElements); //[2,3]
console.log(originalArray); //[1,10,20,4,5]

/*
Insert/remove from the end - O(1)
Insert/remove from the beginning - O(n)
Access O(1)
Search O(1)
Push/Pop - O(1)
Shift/unshift/concat/slice/splice - O(n)
forEach/map/filter/reduce - O(n)
*/


