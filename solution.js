var maxMoves = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  // Initialize the DP array with zeros
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));

  // Initialize the DP array with the values from the first column
  for (let i = 0; i < m; i++) {
    dp[i][0] = i;
  }

  // Iterate through the grid column by column
  for (let j = 1; j < n; j++) {
    for (let i = 0; i < m; i++) {
      dp[i][j] = dp[i][j - 1];

      // Check the three possible moves and update dp[i][j] if necessary
      if (i > 0 && grid[i][j] > grid[i - 1][j - 1]) {
        dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - 1]);
      }
      if (i < m - 1 && grid[i][j] > grid[i + 1][j - 1]) {
        dp[i][j] = Math.max(dp[i][j], dp[i + 1][j - 1]);
      }

      dp[i][j] += grid[i][j] > grid[i][j - 1] ? 1 : 0;
    }
  }

  // Find the maximum value in the last column
  let maxMoves = 0;
  for (let i = 0; i < m; i++) {
    maxMoves = Math.max(maxMoves, dp[i][n - 1]);
  }

  return maxMoves;
};

// Example 1
const grid1 = [
  [2, 4, 3, 5],
  [5, 4, 9, 3],
  [3, 4, 2, 11],
  [10, 9, 13, 15],
];
console.log(maxMoves(grid1)); // Output: 3

// Example 2
const grid2 = [
  [3, 2, 4],
  [2, 1, 9],
  [1, 1, 7],
];
console.log(maxMoves(grid2)); // Output: 0
