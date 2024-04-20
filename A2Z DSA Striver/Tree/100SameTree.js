/* 100. Same Tree
p = [1,2,3], q = [1,2,3]
true
*/
//simple so the PreOrder traversal checkigng of both the tree
const isSameTree = (p,q) => {
  //if both null so tre
  if(p === null && q === null) return true;

  //if anyone of null, false
  if(p === null || q === null) return false;

  return ( (p.val === q.val) && 
  (isSameTree(p.left,q.left)) && (isSameTree(p.right, q.right))
);
}