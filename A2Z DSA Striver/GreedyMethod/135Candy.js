/* 135. Candy
There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.

You are giving candies to these children subjected to the following requirements:

Each child must have at least one candy.
Children with a higher rating get more candies than their neighbors.
Return the minimum number of candies you need to have to distribute the candies to the children.

put: ratings = [1,0,2]
Output: 5
Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
*/
//First take left to right ad right to left array, then start traversing from left->rught and compare left negiour, if left one is bigger, than add 1 more candy in lefttoright array, saem do for right to left array traverse from right->left and see for rught neighour, we can also take one array count for (left to right arr and right to left arr). O(3n) ~ O(n) and O(n)
var candy = function (ratings) {
  let len = ratings.length;
  let result = 0;
  let count = new Array(len).fill(1); //atleast 1 candy will be there.

  //traverse left->right and see left neighors
  for (let i = 1; i < len; i++) {
    if (ratings[i] > ratings[i - 1]) {
      count[i] = Math.max(count[i], count[i - 1] + 1);
    }
  }

  //traverse right->left ans see right neighors, is that one is small add one
  for (let i = len - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      count[i] = Math.max(count[i], count[i + 1] + 1);
    }
  }

  for (let i = 0; i < len; i++) {
    result += count[i];
  }
  return result;
};

//Optimal Method - use of Peak and Dip method, when we travser in rating arr, if we see the peak measn a[i] > ar[i-1] measn peak++ and add in candy also, and return, same do in dip also, but just to note that, when we go from to peak we add peak in candy and we go from peak to dip we also add dip in cady, so at last just take min of (dip and peak) and minus from candy and return it. TC : O(n), SC : O(1)
const candy1 = (ratings) => {
  let len = ratings.length;
  let candy = len;
  let i = 1;
  while (i < len) {
    //if both rating same
    if (ratings[i] === ratings[i - 1]) {
      i++;
      continue;
    }

    let peak = 0;
    while (ratings[i] > ratings[i - 1]) {
      peak++;
      candy += peak;
      i++;

      if (i === len) return candy;
    }

    let dip = 0;
    while (i < len && ratings[i] < ratings[i - 1]) {
      //means we are in dip
      dip++;
      candy += dip;
      i++;
    }

    //just remove the min of dip and peak from candy, because for peak and dip we add twice in candy.
    candy -= Math.min(peak, dip);
  }
  return candy;
};


//02 June 2025, Doing on 03 June
/*In this we are taking two array, because we need to traverse
from left to right and then right to left
in that check the rating[i] > rating[i-1] and rating[i] > rating[j+1]
according to that add left[i-1]+1 to left and right[i+1]+1
TC: O(2n), SC: O(2n)
*/
var candy = function(ratings) {
    let len=ratings.length;
    let left = Array(len).fill(1); //SC:O(n)
    let right = Array(len).fill(1); //SC:O(n)

    //move from the left to right
    for(let i=1; i<len; i++){
        if(ratings[i] > ratings[i-1]){
            left[i] = left[i-1]+1;
        }else{
            left[i] = 1;
        }
    }

    //movw from right to left
    for(let j=len-2; j>=0; j--){
        if(ratings[j] > ratings[j+1]){
            right[j] = right[j+1]+1;
        }else{
            right[j] = 1;
        }
    }

    let result = 0;
    for(let i=0; i<len; i++){
        result += Math.max(left[i], right[i]);
    }
    return result;
};

/*In Better Method, we can simply use the one array and in that
we can compute the value
TC:O(2n), SC:O(n)
*/
var candy = function(ratings) {
    let len = ratings.length;
    let count = Array(len).fill(1);

    for(let i=1; i<len; i++){
        if(ratings[i] > ratings[i-1]){
            count[i] = Math.max(count[i], count[i-1]+1);
        }
    }
    //now traverse from right to left
    for(let i=len-2; i>=0; i--){
        if(ratings[i] > ratings[i+1]){
            count[i] = Math.max(count[i], count[i+1]+1);
        }
    }
    let result = 0;
    for(let i=0; i<len; i++){
        result += count[i];
    }
    return result;
};
