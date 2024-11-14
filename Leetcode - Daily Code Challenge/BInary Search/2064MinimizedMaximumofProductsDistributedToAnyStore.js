/* 2064. Minimized Maximum of Products Distributes to Any Store
14 Nov 2024, Leetcode POTD, Array, BS on Ans.

Input: n = 6, quantities = [11,6]
Output: 3
Explanation: One optimal way is:
- The 11 products of type 0 are distributed to the first four stores in these amounts: 2, 3, 3, 3
- The 6 products of type 1 are distributed to the other two stores in these amounts: 3, 3
The maximum number of products given to any store is max(2, 3, 3, 3, 3, 3) = 3.
*/

/*In this we need to divide the quantities value into n store
we need to see how many numbers we divide quatities so that
we can distribute to all n store. We need minimize the maxi
distribute value, with this we can use "Binary Search on Ans"
we will use Binary Seach. TC: O(m * log(maxValue)), m is 
len of quatities becaus in BS we need to disctribute products
also. for that loop of m. 
SC: O(1)
*/

var minimizedMaximum = function(n, quantities) {
  //for getting the range we need to find the max of 
  //quantities
  let maxValue = Number.MIN_VALUE;
  for(let product of quantities){ 
      maxValue = Math.max(maxValue, product);
  }
  let low = 1;
  let high = maxValue;
  let ans = 0;
  
  //TC: O(m * log(maxValue))
  while(low <= high){//O(log(maxValue))
      let mid = low + Math.floor((high-low)/2);

      if(distributePossible(mid, n, quantities)){//O(m)
          ans = mid; //this is ans for now, but we need to 
          //minimize this, move high=mid-1;
          high = mid - 1;
      }else{
          low = mid + 1;
      }
  }
  return ans;
};

function distributePossible(mid, shops, quantities){
  for(let product of quantities){
      //now we need to divide the product by mid,
      //to check if we distribute that to all shops
      shops -= Math.ceil(product / mid);
      //shops -= Math.floor((product + mid - 1)/mid);

      if(shops < 0){
          //if still there are some shp left, return false
          return false;
      }
  }
  return true;
}