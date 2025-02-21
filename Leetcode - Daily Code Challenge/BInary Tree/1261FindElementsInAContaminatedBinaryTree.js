/*1261. Find Elements in a Contaminated Binary Tree
21 Feb 25, Leetcode POTD, Tree

Input
["FindElements","find","find"]
[[[-1,null,-1]],[1],[2]]
Output
[null,false,true]
Explanation
FindElements findElements = new FindElements([-1,null,-1]); 
findElements.find(1); // return False 
findElements.find(2); // return True 

*/

class FindElements{
    constructor(root){
        this.set = new Set();
        this.dfs(root, 0);
    }
    dfs(root, x){ //TC: O(n)
        if(!root) return;

        root.val = x;
        this.set.add(x);
        this.dfs(root.left, 2*x+1);
        this.dfs(root.right, 2*x+2);
    }
    find(target){ //O(1)
        return this.set.has(target);
    }
}
//SC: O(n)





class FindElements{
    constructor(root){
        this.set = new Set();
        this.bfs(root, 0);
    }
    bfs(root, x){ //TC: O(n)
      let queue = [];
      root.val = x;
      queue.push(root);

      while(queue.length > 0){
        let curr = queue.shift();
        this.set.add(curr.val);

        if(curr.left){
            curr.left.val = 2*curr.val+1;
            queue.push(curr.left);
        }
        if(curr.right){
            curr.right.val = 2 * curr.val + 2;
            queue.push(curr.right);
        }
      }
    }
    find(target){ //O(1)
        return this.set.has(target);
    }
}
//SC: O(n)