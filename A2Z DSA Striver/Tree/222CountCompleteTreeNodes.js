/* 222. Count Complete Tree Nodes
Input: root = [1,2,3,4,5,6]
Output: 6
*/
//Approach 1 - use of Inorder, and then counting the nodes TTC : O(n), SC : O(logn)
const countNodes = (root) => {
  if(root === null) return 0;
  let count = 0;

  const inOrder = (root) => {
    if(root === null) return;

    count++;
    inOrder(root.left);
    inOrder(root.right);
  }
  inOrder(root);
  return count;
}
//Approach 2- count the left and right height, maxi of number of node = 2^h-1 TC : O(logn)*H ~ O(logn)*O(logn) ~ O(llogn)^2, SC : O(H) ~ O(logn)
const countNodes1 = (root) => {
  if(root === null) return 0;

  let lh = findHeightL(root.left);
  let rh = findHeightR(root.right);

  if(lh === rh){
    //complete BT
    return (2<<lh)-1; //2^h-1 ; max number of nudes in BR
  }

  return 1 + countNodes1(root.left)+countNodes1(root.right);
}
function findHeightL(node){
  let height = 0;
  while(node) {
    height++;
    node = node.left;
  }
  return height;
}
function findHeightR(node){
  let height = 0;
  while(node){
    height++;
    node = node.right;
  }
  return height;
}