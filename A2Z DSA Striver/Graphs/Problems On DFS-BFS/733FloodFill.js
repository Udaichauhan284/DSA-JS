/* 733. Flood Fill
Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.
*/
 //IN this we need to fill the adjencent cell with the color , from the starting point, so here we can use DFS, as we need to go the depeth of grid. TC: O(n*m)*4 ~ O(n*m), SC : O(n*m) recursive
const floodFill = (image,sr,sc,color) => {
  if(image.length === 0) return image;
  if(image[sr][sc] === color) return image;

  dfsFill(image,sr,sc,color,image[sr][sc]);
  return image;
};
function dfsFill(image,row,col,color,curr){
  if(row < 0 || col < 0 || row >= image.length || col >= image[0].length) return;

  if(curr !== image[row][col]) return;

  image[row][col] = color;

  //dfs for 4-direction
  dfsFill(image,row+1,col,color,curr);
  dfsFill(image,row-1,col,color,curr);
  dfsFill(image,row,col+1,color,curr);
  dfsFill(image,row,col-1,color,curr);
}

console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]],1,1,2));