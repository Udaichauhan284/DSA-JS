/* 2418 Sort the people
22 July 2024, Leetcode POTD, Array, map, Sorting

Input: names = ["Mary","John","Emma"], heights = [180,165,170]
Output: ["Mary","Emma","John"]
Explanation: Mary is the tallest, followed by Emma and John.
*/

/*Brute Method: use of two loop and check which one is 
greater, if greater swap it.
TC: O(n^2)
SC: O(1), just for local O(n)
*/
var sortPeople = function(names, heights) {
  let localNames = [...names];
  let localHeights = [...heights];
  let len = names.length;
  for(let i=0; i<len; i++){
      for(let j=i+1; j<len; j++){
          if(localHeights[i] < localHeights[j]){
              [localHeights[i], localHeights[j]] = [localHeights[j], localHeights[i]];
              [localNames[i], localNames[j]] = [localNames[j], localNames[i]];
          }
      }
  }
  return localNames;
};


/*Take a Map and put the heights : names and sort the heights 
and return the names
TC: O(n)+O(nlogn)+O(n) ~ O(nlogn)
SC: O(n)
*/
var sortPeople = function(names, heights) {
  let people = [];
  let len = names.length;
  let result = [];
  for(let i=0; i<len; i++){
      people.push({name : names[i], height: heights[i]});
  }

  //now sort the map, with heights
  people.sort((a,b) => b.height - a.height);
  for(let i=0; i<len; i++){
      result.push(people[i].name)
  }
  return result;
};

/*Take a Map and put the heights : names and sort the heights 
and return the names
If we use Merge sort for sorting the people Arr
TC: O(nlogn), SC: O(n)
*/
var sortPeople = function(names, heights) {
  let people = [];
  let len = names.length;
  let result = [];
  for(let i=0; i<len; i++){
      people.push({name : names[i], height: heights[i]});
  }

  mergeSort(people, 0, people.length-1);

  for(let i=0; i<len; i++){
      result.push(people[i].name);
  }
  return result;
};
function mergeSort(arr, low, high){
  if(low >= high){
      return;
  }
  let mid = Math.floor(low + (high-low)/2);
  mergeSort(arr,low,mid);
  mergeSort(arr,mid+1,high);
  merge(arr,low,mid,high);
}
function merge(arr,low,mid,high){
  let temp = [];
  let left = low;
  let right = mid+1;

  while(left <= mid && right <= high){
      if(arr[left].height > arr[right].height){
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