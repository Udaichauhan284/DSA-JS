/* 1937 Maximum Number of Points with cost

*/
var maxPoints = function(points) {
  const m = points.length;
  const n = points[0].length;
  let dp = Array(n).fill(0);

  // Initialize dp with the first row
  for (let j = 0; j < n; ++j) {
      dp[j] = points[0][j];
  }

  // Traverse through each row
  for (let i = 1; i < m; ++i) {
      const leftMax = Array(n).fill(0);
      const rightMax = Array(n).fill(0);
      const newDp = Array(n).fill(0);

      // Calculate left max
      leftMax[0] = dp[0];
      for (let j = 1; j < n; ++j) {
          leftMax[j] = Math.max(leftMax[j - 1], dp[j] + j);
      }

      // Calculate right max
      rightMax[n - 1] = dp[n - 1] - (n - 1);
      for (let j = n - 2; j >= 0; --j) {
          rightMax[j] = Math.max(rightMax[j + 1], dp[j] - j);
      }

      // Calculate new DP for the current row
      for (let j = 0; j < n; ++j) {
          newDp[j] = Math.max(leftMax[j] - j, rightMax[j] + j) + points[i][j];
      }

      dp = newDp;
  }

  return Math.max(...dp);
};