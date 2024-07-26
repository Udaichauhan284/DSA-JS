/* 713. Subarray Product Less Than K.
27 Mar 2024. 
nums[10,5,2,6], k = 100
return subarry whose product is less than k.
o/p - 8 {[10],[5],[2],[6],[10,5],[5,2],[2,6],[5,2,6]}
*/
//Brute App- use two loops and find the product for all subarray and check it. if product < k -> count++, other wise break TC O(n^2), SC O(1)
const numSubarrayProductLessThanK = (nums,k) => {
  //edge case
  if(k<=1){ //if target k is 0 or 1, return 0
    return 0;
  }

  let count = 0;
  for(let i=0; i<nums.length; i++){
    let product = 1;
    for(j=i; j<nums.length; j++){
      //calculate product
      product *= nums[j];
      if(product < k){ //if product is less than k, condition match, so count++;
        count++;
      }else {
        break;
      }
    }
  }
  return count;
}
// console.log(numSubarrayProductLessThanK([10,5,2,8],100));

//Optimal Approach, use of Slinding window, point i and j at 0, move j and find product, when product >= k, divide the product by nums[i] and increment the i. TC O(n), SC O(1).
const numSubarrayProductLessThanK1 = (nums,k) => {
  //edge case
  if(k <= 1){ //if k=1 or k=0
    return 0; 
  }

  let len = nums.length;
  let i=0;
  let j=0;
  let count = 0;
  let product = 1;
  //move the j pointer. till last of len
  while(j < len){
    //calculate the product
    product *= nums[j];

    while(product >= k && i<=j){ 
      //this means product is bigger than k, so divide the product by nums[i] and increase i
      product = Math.floor(product / nums[i]);
      i++; 
    }
    count += j-i+1; //counting the subarray till j, including j also
    j++; //increase j also , so outer loop break
  }
  return count;
}
console.log(numSubarrayProductLessThanK1([10,5,2,8],100));
