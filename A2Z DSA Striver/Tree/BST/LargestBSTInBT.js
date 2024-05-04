/* Largest BST In a Biniary Tree.
find the largest size BST in BT, so first need to check that is that a BST or not, MIN,MAX,size
for min take MAX_VALUE, Max take MIN_VALUE for compareing
*/
//TC : O(n), O(1), O(n) just for recursion
const largestBST = (root) => {
  return largestBSTHelper(root)[2];
}
function largestBSTHelper(root){
  if(root === null) return [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, 0];

  if(root.left === null && root.right === null) {
    return [root.data, root.data, 0];
  }

  let left = largestBSTHelper(root.left);
  let right = largestBSTHelper(root.right);

  let ans = [0,0,0]; //min,max,size

  if(left[1] < root.data && right[0] > root.data){
    //already bst
    ans[0] = Math.min(left[0], Math.min(right[0],root.data));
    ans[1] = Math.max(right[1], Math.max(left[1], root.data));

    ans[2] = 1+left[2]+right[2];
    return ans;
  }

  //if not BST
  ans[0] = Number.MIN_SAFE_INTEGER;
  ans[1] = Number.MAX_SAFE_INTEGER;
  ans[2] = Math.max(left[2], right[2]);

  return ans;
}
