/* Rat in Maze
rat is at starting point of (0,0) matrix n*n. he want to go to end point (n-1,n-1), No box should be replaces twice. Direction to Move UP, DOWN, LEFt, RIGHT, 0->blocked, 1->non-blocked in this block rat can move.
n=4, so maze will be n*n => 4*4

This can be solve using recursion and backtraking
each cell has 3 option to go up or down, left or right, because it cant go to it own cell again. SO TC : O(3^n^2), SC : O(n^2), no auxilary space, just useing stack for recursion call and in worst case recusion call wil go depth of maze n*n so n^2.
*/

const solve = (i,j,m,n,path,result) => {
  //base case
  if(i<0 || j<0 || i >= n || j >= n || m[i][j] === 0){
    return;
  }

  //end case, where rat will at end point n-1 and n-1 , so add that path
  if(i===n-1 && j===n-1){
    result.push([...path].join(""));
    return;
  }

  //main code, where recrusion happend, first make that cell o, so rat wont go there again
  let temp = m[i][j];
  m[i][j] = 0;

  //down row+1, col
  path.push("D");
  solve(i+1,j,m,n,path,result);
  path.pop();

  //left row, col-1
  path.push("L");
  solve(i,j-1,m,n,path,result);
  path.pop();

  //right row, col+1
  path.push("R");
  solve(i,j+1,m,n,path,result);
  path.pop();

  //up row-1, col
  path.push("U");
  solve(i-1,j,m,n,path,result);
  path.pop();

  m[i][j] = temp;
}
class Solution{
  findPath(m,n){
    let path = [];
    let result = [];

        //i j
    solve(0,0,m,n,path,result);
    return result;
  }
}