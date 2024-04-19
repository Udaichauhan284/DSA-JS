/* PreOrder, PostOrder and Inorder iin one traversal in one stack,
just in stack push node and num value,
num === 1 measn for preOrder, increment num value and push in stack, and look for left
num === 2 means for inOrder, incremenet num value and push in stack and look for right child.
num === 3 means for postorder, just push in post stack
*/
const preInPostTraversal = (root) => {
  let pre = [];
  let inOrder = [];
  let post = [];

  if(!root) return [];

  let stack = [];
  stack.push([root,1]);
  while(stack.length > 0){
    let [node,state] = stack.pop();

    if(state === 1){
      //measn push in preOrder
      pre.push(node.val);
      state = 2; //change the state , 2 means inOrder
      stack.push([node,state]);

      if(node.left !== null) stack.push([node.left,1]);
    } 
    else if (state === 2){
      //measn push inOrder 
      inOrder.push(node.val);
      state = 3;
      stack.push([node,state]);

      //look for right
      if(node.right !== null) stack.push([node.right,1]);
    }else {
      //post order
      post.push([node,state]);
    }
  }
  return [pre,inOrder,post];
}