/* 1636. Sort Array by Increasing Frequency
23 July 2024, Leetcode POTD, Array, Sorting -> Explaination in Sorting Notes
Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.

Return the sorted array.

Input: nums = [1,1,2,2,2,3]
Output: [3,1,1,2,2,2]
Explanation: '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3.
*/


/*Brute Method, form the freqMap, then change that map into arr
for sorting, when freq is same, sort the num according to des
otherwise sort the freq in increasing order
TC: O(n)+O(n)+O(nlogn)+O(n) ~ O(nlogn)
SC: O(n)
*/
var frequencySort = function(nums) {
  let freqMap = [];
  //build the freqMap, O(n)
  for(let num of nums){
      if(freqMap[num]){
          freqMap[num]++;
      }else{
          freqMap[num] = 1;
      }
  }

  let freqArr = []; //taking the arr for sorting
  for(let num in freqMap){ //O(n)
      freqArr.push([parseInt(num), freqMap[num]]);
  }

  //now sort the freqArr, O(nlogn)
  freqArr.sort((a,b) => {
      if(a[1] === b[1]){// if freq is same, then sort num in des
          return b[0]-a[0]; //return in desecending order
      }
      return a[1] - b[1]; //return in ascending order
  });

  let result = [];
  for(let [num, freq] of freqArr){ //O(n)
      for(let i=0; i<freq; i++){
          result.push(num);
      }
  }
  return result;
};



/* Method 2 - optimal method, use of inbuild sorting of js
build the freqMap and take localNums so that dont change the
input, sort the localNums.
TC: O(nlogn)+O(n) ~ O(nlogn)
SC: O(n);
*/
var frequencySort = function(nums) {
  let freqMap = {};
  for(let num of nums){
      if(freqMap[num]){
          freqMap[num]++;
      }else{
          freqMap[num] = 1;
      }
  }
  let localNums = nums;
  //now sort the localNums
  localNums.sort((a,b) => {
      let freqA = freqMap[a];
      let freqB = freqMap[b];
      if(freqA === freqB){
          //if both freq is same, sort in descending order
          return b-a;
      }
      //other wise sort according freq wise, inscresing 
      return freqA - freqB;
  });

  return localNums;
};


/*Method 3 - use of Optimal Method, use of Merge Sort
TC: O(nlogn), SC: O(n)
*/
const frequencySort1 = (nums) => {
  let freqMap = {};
  //build the freqmap from nums arr
  for(let num of nums){
    if(freqMap[num]){
      freqMap[num]++;
    }else{
      freqMap[num] = 1;
    }
  }

  //form a array, for sorting and sending into mergeSOrt
  let arr = [];
  for(let num of nums){
    arr.push({value : nums, freq: freqMap[num]});
  }
  //let arr = nums.map(num => ({ value: num, frequency: frequencyMap[num] }));

  mergeSort(arr, 0, arr.length-1);

  let result = [];
  for(let {num, freq} of arr){
    result.push(num);
  }
  return result;
}
function mergeSort(arr, low, high){
  if(low >= high){
    return;
  }
  let mid = Math.floor(low + (high-low)/2);
  mergeSort(arr, low, mid);
  mergeSort(arr, mid+1, high);
  merge(arr,low,mid, high);
}
function merge(arr, low, mid, high){
  let temp = [];
  let left = low;
  let right = mid+1;

  while(left <= mid && right <= high){
    if(arr[left].freq < arr[right].freq || (arr[left].freq === arr[right].freq && arr[left].value > arr[right].value)){
      temp.push(arr[left]);
      left++;
    }else{
      temp.push(arr[right]);
      right++;
    }
  }
  while(left <= mid){
    temp.push(arr[left]);
    left++;
  }
  while(right <= high){
    temp.push(arr[right]);
    right++;
  }
  for(let i=low; i<=high; i++){
    arr[i] = temp[i-low]; 
  }
}