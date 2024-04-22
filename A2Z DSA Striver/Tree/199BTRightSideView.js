/* 199 Binary Tree Right Side View
root = [1,2,3,null,5,null,4]
o/p: [1,3,4]
*/
/*In this question, we need to return the right view, so do the Reverse Preorder reursively - Root,right,left, when 
stack length === level add that root val
then recursive call for first right and then left
TC: O(n), Sc :O(H), in worst case O(n)
*/
const rightSideView = (root) => {
  let ans = []
  if(!root) return ans;

  traverseRight(root,0,ans); //root,level,ans
  return ans;
};
function traverseRight(root,level,ans){
  if(!root) return ans;

  if(ans.length === level){
    ans.push(root.val);
  }

  //traverse first right and then left
  traverseRight(root.right,level+1,ans);
  traverseRight(root.left,level+1,ans);
}