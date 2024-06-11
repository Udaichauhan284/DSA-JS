/* 1122. Relative Sort Array
11 June 2024 - Leetcode POTD #topic: array, sorting, couting sort, custom sort.
Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.
Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.

Example 1:
Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
Output: [2,2,2,1,4,3,3,9,6,7,19]
*/
/* Method 1- use of count sort
TC: O(nlogn)+O(nlogn) ~ O(nlogn)
SC: O(n)+O(n) ~ O(n)
as in js there is no Ordered Map, i take two arr for first
value and remainingElem in mao, i sort the remainingElem and 
then concat in result O(nlogn)
*/
var relativeSortArray = function (arr1, arr2) {
  let map = new Map();
  //set the value and its freq for arr1 eleme
  for (let num of arr1) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  //now iterate over arr2 and check how many time its value
  //coming in map add that many value in arr1
  let result = [];
  for (let num of arr2) {
    let freq = map.get(num);
    while (freq > 0) {
      result.push(num);
      freq--;
    }
    //also now you take map elem, delete that too
    map.delete(num);
  }
  //now add remaining value from map into arr
  let remainingElem = [];
  for (let [value, freq] of map) {
    while (freq > 0) {
      remainingElem.push(value);
      freq--;
    }
  }
  remainingElem.sort((a, b) => a - b);
  return result.concat(remainingElem);
};

/* Method 2- now i will use compator means custom sorting
same use map, first iterator over arr2 and set arr2 elem and 
index too.
now iterator over arr1 elem and see if there num present in map
if not set high value to that num 1e9. 
TC: O(nlogn), SC: O(n)
*/
var relativeSortArray1 = function (arr1, arr2) {
  let map = new Map();
  //iterator over arr2 and set the elem with index
  for (let i = 0; i < arr2.length; i++) {
    map.set(arr2[i], i);
  }
  //now iterator over arr1 and is that present in map
  for (let num of arr1) {
    if (!map.has(num)) {
      map.set(num, 1e9);
    }
  }
  //custom compartor
  let compartor = (num1, num2) => {
    let index1 = map.get(num1);
    let index2 = map.get(num2);
    if (index1 === index2) {
      return num1 - num2;
    }
    return index1 - index2;
  };
  return arr1.sort(compartor);
};
