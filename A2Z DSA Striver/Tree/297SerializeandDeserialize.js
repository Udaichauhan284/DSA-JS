/* 297. Serialize and Deserialize Binary Tree
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if(!root) return "";
  let s = "";
  let q = []; //queue for level order travesal
  q.push(root);
  while(q.length > 0){
      let node = q.shift();

      if(node === null){
          s += "null,";
      }
      else{
          s += node.val+",";

          q.push(node.left);
          q.push(node.right);
      }
  }
  return s;
};

/**
* Decodes your encoded data to tree.
*
* @param {string} data
* @return {TreeNode}
*/
//TC : O(n), SC : O(n)
var deserialize = function(data) {
  if(data === "") return null;

  let s = data.split(","); //convertaing str in arr
  let rootVal = s.shift(); //first root val
  let root = new TreeNode(parseInt(rootVal));

  let q = [];
  q.push(root);
  while(q.length > 0){
      let node = q.shift();

      let leftVal = s.shift();
      if(leftVal !== "null"){
          let leftNode = new TreeNode(parseInt(leftVal));
          node.left = leftNode;
          q.push(leftNode);
      }

      let rightVal = s.shift();
      if(rightVal !== "null"){
          let rightNode = new TreeNode(parseInt(rightVal));
          node.right = rightNode;
          q.push(rightNode);
      }
  }
  return root;
};

/**
* Your functions will be called as such:
* deserialize(serialize(root));
*/