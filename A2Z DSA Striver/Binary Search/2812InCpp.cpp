#include <vector>
class Solution
{
public:
  bool check(vector<vector<int>> &distNearestThief, int sf, int n, vector<vector<int>> &directions)
  {
    queue<pair<int, int>> que;

    vector<vector<bool>> visited(n, vector<bool>(n, false));
    // 0,0 --> n-1, n-1
    que.push({0, 0});
    visited[0][0] = true;

    if (distNearestThief[0][0] < sf)
      return false;

    while (!que.empty())
    {
      int curr_i = que.front().first;
      int curr_j = que.front().second;

      que.pop();

      if (curr_i == n - 1 && curr_j == n - 1)
      {
        return true;
      }

      for (vector<int> &dir : directions)
      {
        int new_i = curr_i + dir[0];
        int new_j = curr_j + dir[1];

        if (new_i >= 0 && new_i < n && new_j >= 0 && new_j < n &&
            visited[new_i][new_j] != true)
        {
          if (distNearestThief[new_i][new_j] < sf)
          {
            continue; // reject this cell
          }
          que.push({new_i, new_j});
          visited[new_i][new_j] = true;
        }
      }
    }

    return false;
  }

  int maximumSafenessFactor(vector<vector<int>> &grid)
  {
    int n = grid.size();

    vector<vector<int>> directions{{1, 0}, {-1, 0}, {0, -1}, {0, 1}};

    // Step-1 Precalculation of distNearestThief - for each cell
    vector<vector<int>> distNearestThief(n, vector<int>(n, -1));
    queue<pair<int, int>> que;
    vector<vector<bool>> visited(n, vector<bool>(n, false));

    // push all cells in queue where theives are present
    for (int i = 0; i < n; i++)
    {
      for (int j = 0; j < n; j++)
      {
        if (grid[i][j] == 1)
        {
          que.push({i, j});
          visited[i][j] = true;
        }
      }
    }

    int level = 0;
    while (!que.empty())
    {
      int size = que.size();

      while (size--)
      {
        int curr_i = que.front().first;
        int curr_j = que.front().second;
        que.pop();
        distNearestThief[curr_i][curr_j] = level;
        for (vector<int> &dir : directions)
        {
          int new_i = curr_i + dir[0];
          int new_j = curr_j + dir[1];

          if (new_i < 0 || new_i >= n || new_j < 0 || new_j >= n ||
              visited[new_i][new_j])
          {
            continue;
          }

          que.push({new_i, new_j});
          visited[new_i][new_j] = true;
        }
      }
      level++;
    }

    // Step-2 Apply binary search on SF
    int l = 0;
    int r = 400;
    int result = 0;

    while (l <= r)
    {
      int mid_sf = l + (r - l) / 2;

      if (check(distNearestThief, mid_sf, n, directions))
      {
        result = mid_sf;
        l = mid_sf + 1;
      }
      else
      {
        r = mid_sf - 1;
      }
    }

    return result;
  }
};
