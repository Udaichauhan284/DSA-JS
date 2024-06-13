/* Ninja Training or Geek's Training
Geek is going for n day training program. He can perform any one of these three activities Running, Fighting, and Learning Practice. Each activity has some point on each day. As Geek wants to improve all his skills, he can't do the same activity on two consecutive days. Help Geek to maximize his merit points as you are given a 2D array of points points, corresponding to each day and activity.

Input:
n = 3
points = [[1,2,5],[3,1,1],[3,3,3]]
Output:
11
Explanation:
Geek will learn a new move and earn 5 point then on second
day he will do running and earn 3 point and on third day
he will do fighting and earn 3 points so, maximum point is 11.
*/
//Memoization use of memo arrat O(n*4)
class Solution {
  //Function to find the maximum points among all the possible ones.
  maximumPoints(points, n) {
    //your code here
    let memo = Array(n)
      .fill(-1)
      .map(() => Array(4).fill(-1));
    return this.solve(n - 1, 3, memo, points); //days, last task, memo, points arr
  }
  solve(day, last, memo, arr) {
    if (memo[day][last] !== -1) return memo[day][last];
    if (day === 0) {
      let maxi = 0;
      for (let i = 0; i <= 2; i++) {
        if (i !== last) {
          maxi = Math.max(maxi, arr[0][i]);
        }
      }
      return (memo[day][last] = maxi);
    }

    let maxi = 0;
    for (let i = 0; i <= 2; i++) {
      if (i !== last) {
        let activity = arr[day][i] + this.solve(day - 1, i, memo, arr);
        maxi = Math.max(maxi, activity);
      }
    }
    memo[day][last] = maxi;
    return memo[day][last];
  }
}

//Tabulization TC: O(n*4*3), SC: O(n*4)
class Solution {
  //Function to find the maximum points among all the possible ones.
  maximumPoints(points, n) {
    //your code here
    let dp = Array(n)
      .fill(-1)
      .map(() => Array(4).fill(-1));
    //base case
    dp[0][0] = Math.max(points[0][1], points[0][2]);
    dp[0][1] = Math.max(points[0][0], points[0][2]);
    dp[0][2] = Math.max(points[0][0], points[0][1]);
    dp[0][3] = Math.max(points[0][0], Math.max(points[0][1], points[0][2]));

    for (let day = 1; day < n; day++) {
      for (let last = 0; last < 4; last++) {
        dp[day][last] = 0;
        for (let task = 0; task <= 2; task++) {
          if (task !== last) {
            let activity = points[day][task] + dp[day - 1][task];
            dp[day][last] = Math.max(dp[day][last], activity);
          }
        }
      }
    }
    return dp[n - 1][3]; //last day and for last day, how many task there
  }
}

//Space Optimization: TC: O(n*4 * 3), SC: O(4)
class Solution {
  //Function to find the maximum points among all the possible ones.
  maximumPoints(points, n)
  {
      //your code here
      let prev = Array(4).fill(0);
      //base case
      prev[0] = Math.max(points[0][1], points[0][2]);
      prev[1] = Math.max(points[0][0], points[0][2]);
      prev[2] = Math.max(points[0][0], points[0][1]);
      prev[3] = Math.max(points[0][0], Math.max(points[0][1], points[0][2]));
      
      for(let day=1; day<n; day++){
          let temp = Array(4).fill(0);
          for(let last=0; last<4; last++){
              temp[last] = 0
              for(let task=0; task<=2; task++){
                  if(task !== last){
                      temp[last] = Math.max(temp[last], points[day][task]+prev[task]);
                  }
              }
          }
          prev = temp;
      }
      return prev[3]; //last day and for last day, how many task there
  }
}