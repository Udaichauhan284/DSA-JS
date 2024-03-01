/* Find the row with maximum 1.

*/
//brute - traverse the both row and col and find the count of 1 by adding it.
//TC O(n*m)
const bruteFindRowMax1 = (matrix, n, m) =>{
  let cunt_max = 0;
  let index = -1;
  for(let i=0; i<n; i++){
    let cunt_ones = 0;
    for(let j=0; j<m; j++){
      cunt_ones += matrix[i][j];
    }
    if(cunt_ones > cunt_max){
      cunt_max = cunt_ones;
      index = i;
    }
  }
  return index;
}

//Optimal Way - Binary Search using lowerBoundof 1, number of ones = m - lowerBound(1); TC O(nlogN)
const lowerBound = (arr, col, x) =>{
  let low = 0, high = col-1;
  let ans = -1;
  while(low<=high){
    let mid = Math.floor((low+high)/2);
    if(arr[mid] >= x){
      ans = mid;
      high = mid-1; //search of small index on left side
    }else{
      low=mid+1; //search of large index of right side;
    }
  }
  return ans;
}
const optimalFindRowMax1 = (matrix,n,m) => {
  let cunt_max = 0;
  let index = -1;
  for(let i=0; i<n; i++){
    let count_ones = m - lowerBound(matrix,m,1);
    if(count_ones > cunt_max){
      cunt_max = count_ones;
      index = i;
    }
  }
  return index;
}
let matrix = [[1,1,1],[0,0,1],[0,0,0]];
const n=3, m=3;
console.log(bruteFindRowMax1(matrix,n,m));
console.log(optimalFindRowMax1(matrix,n,m));