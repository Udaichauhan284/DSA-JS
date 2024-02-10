/*  Cartesian Product
Given ywo finite non-empty sets, find their Catesian Product.
In mathematics, specifically set theroy the Cartesian Product of two sets A and B, denoted AxB, is the set of all ordered pairs (a,b) where a is in A and b is in B
const A = [1,2] const B = [3,4]
AxB = [[1,3], [1,4], [2,3], [2,4]]

Idea
Traverse each array and pair each element in the first array with each element in the second element.
*/

//TC - O(nm) - n is for arrA, m is for arrB. nested loop
function CartesianProduct(arrA, arrB){
  const result = [];
  for(let i=0; i<arrA.length; i++){
    for(let j=0; j<arrB.length; j++){
      result.push([arrA[i], arrB[j]]);
    }
  }
  return result;
}
const arr1 = [1,2];
const arr2 = [3,4];
console.log(CartesianProduct(arr1, arr2));