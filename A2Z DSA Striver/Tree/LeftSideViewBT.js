const leftSideView = (root) => {
  let ans = []
  if(!root) return ans;

  traverseLeft(root,0,ans); //root, level, ans
  return ans;
};
function traverseLeft(root,level,ans){
  if(!root) return ans;

  //check the level 
  if(ans.length === level) ans.push(root.val);

  //in left traversal first traverse the left and then right
  traverseLeft(root.left,level+1,ans);
  traverseLeft(root.right,level+1,ans);
}