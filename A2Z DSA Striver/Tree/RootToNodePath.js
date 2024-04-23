/* Root to Node Path in Binary Tree
find the path between root and leaf/node
this is done by Inorder traversal, when recursive call return true that will our ans path.
*/
const main = (root,node) => {
  let ans = [];
  if(!root) return ans;

  getPath(root,node,ans);
  return ans;
};
function getPath(root,node,ans){
  if(!root) return false;

  ans.push(root.val);
  if(root.val === node) return true;

  if(getPath(root.left,node,ans) || getPath(root.right,node,ans)) {
    return true;
  }

  ans.pop();
  return false;
}