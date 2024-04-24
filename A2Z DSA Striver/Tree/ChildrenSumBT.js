/* Check for Children Sum Property
*/
//TC : O(n), SC: O(n)
const childrenSum = (root) => {
  if(!root) return;

  let child = 0;
  if(!root.left) child += root.left.val;
  if(!root.right) child += root.right.val;

  //compare the sum of children with the update nodes's value and update it
  if(child >= root.val){
    root.val = child;
  }else{
    //smaller
    if(root.left){
      root.left.val = root.val; 
    }else if(root.right){
      root.right.val = root.val;
    }
  }
  //move left and right
  childrenSum(root.left);
  childrenSum(root.right);

  //calculate the total value
  let tot = 0;
  if(root.left) tot+= root.left.val;
  if(root.right) tot+= root.right.val;

  //if the left or right child exists, update the current node's value
  if(root.left || root.right){
    root.val = tot;
  }
}