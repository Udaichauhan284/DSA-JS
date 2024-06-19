/* 1482. Minimum number of days to make m bouqets

*/
//Brute Method
function possible(arr, day, m, k) {
  let n = arr.length; // Size of the array
  let cnt = 0;
  let noOfB = 0;
  // Count the number of bouquets
  for (let i = 0; i < n; i++) {
    if (arr[i] <= day) {
      cnt++;
    } else {
      noOfB += Math.floor(cnt / k);
      cnt = 0;
    }
  }
  noOfB += Math.floor(cnt / k);
  return noOfB >= m;
}

function roseGarden(arr, k, m) {
  let val = m * k;
  let n = arr.length; // Size of the array
  if (val > n) return -1; // Impossible case
  // Find maximum and minimum
  let mini = Infinity,
    maxi = -Infinity;
  for (let i = 0; i < n; i++) {
    mini = Math.min(mini, arr[i]);
    maxi = Math.max(maxi, arr[i]);
  }

  for (let i = mini; i <= maxi; i++) {
    if (possible(arr, i, m, k)) return i;
  }
  return -1;
}

let arr = [7, 7, 7, 7, 13, 11, 12, 7];
let k = 3;
let m = 2;
let ans = roseGarden(arr, k, m);
if (ans === -1) {
  console.log("We cannot make m bouquets.");
} else {
  console.log("We can make bouquets on day " + ans);
}

//Optimal Way
var minDays = function (bloomDay, m, k) {
  function possible(bloomDay, day, numFlower) {
    let noOfB = 0;
    let count = 0;
    let len = bloomDay.length;
    for (let i = 0; i < len; i++) {
      if (bloomDay[i] <= day) {
        count++;
      } else {
        noOfB += Math.floor(count / numFlower);
        count = 0;
      }
    }
    noOfB += Math.floor(count / numFlower);
    return noOfB;
  }

  let len = bloomDay.length;
  let val = m * k;
  if (val > len) return -1;

  let low = Math.min(...bloomDay);
  let high = Math.max(...bloomDay);
  let ans = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (possible(bloomDay, mid, k) >= m) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
};

//This is good Approach
//19 June 2024 - Leetcode POTD, Array, binary Search
/* In this we want mini days to take bloom flower so that
we can make bouquets. so do Binary Search on Answer
TC: O(nlog(maxDay)), SC: O(1)
*/
var minDays = function (bloomDay, m, k) {
  let len = bloomDay.length;
  //binary search
  let startDay = 0;
  //for end day we need max value
  let maxDay = bloomDay[0];
  for (let i = 0; i < len; i++) {
    //O(n)
    if (bloomDay[i] > maxDay) {
      maxDay = bloomDay[i];
    }
  }
  let endDay = maxDay;
  let minDay = -1;
  if (m * k > len) return -1;

  //TC: O(nlog(maxDay))
  while (startDay <= endDay) {
    //O(log(maxDay))
    let mid = startDay + Math.floor((endDay - startDay) / 2);

    if (canMakeBouquets(bloomDay, mid, k) >= m) {
      //O(n)
      minDay = mid;
      //need more mini day so
      endDay = mid - 1;
    } else {
      startDay = mid + 1;
    }
  }
  return minDay;
};
//canMakeBouquets function to see how many bouquets we can make
//for k adjecent flower
function canMakeBouquets(arr, mid, k) {
  let numOfBou = 0;
  let consecutiveDays = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= mid) {
      consecutiveDays++;
    } else {
      consecutiveDays = 0;
    }

    if (consecutiveDays === k) {
      numOfBou++;
      //again make it zero for consecutive days
      consecutiveDays = 0;
    }
  }
  return numOfBou;
}

//19 June 2024,
/* Brute Method, for loop from mini of bloomDay to max of BloomDay
TC: O(n*n)+O(n), SC: O(1)
This will give TLE. 
*/
var minDays = function (bloomDay, m, k) {
  let len = bloomDay.length;
  let val = m * k;
  let minDay = -1;
  if (val > len) return minDay;
  let mini = Number.MAX_VALUE;
  let maxi = Number.MIN_VALUE;
  for (let i = 0; i < len; i++) {
    if (bloomDay[i] > maxi) {
      maxi = bloomDay[i];
    }
    if (bloomDay[i] < mini) {
      mini = bloomDay[i];
    }
  }

  //for loop from mini and maxi
  for (let i = mini; i <= maxi; i++) {
    if (canMakeBouquets(bloomDay, i, k) >= m) {
      miniDay = i;
      break;
    }
  }
  return miniDay;
};
//canMakeBouquets function to see how many bouquets we can make
//for k adjecent flower
function canMakeBouquets(arr, day, k) {
  let numOfBou = 0;
  let consecutiveDays = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= day) {
      consecutiveDays++;
    } else {
      consecutiveDays = 0;
    }

    if (consecutiveDays === k) {
      numOfBou++;
      //again make it zero for consecutive days
      consecutiveDays = 0;
    }
  }
  return numOfBou;
}
