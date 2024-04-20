class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class Solution {
  isLeaf(root) {
    // if(root.left === null && root.right === null) return true;
    // else return false;
    return root.left === null && root.right === null;
  }

  addLeftBoundry(root, res) {
    let curr = root.left;
    while (curr) {
      if (!this.isLeaf(curr)) res.push(curr.val);

      if (curr.left) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
  }

  addRightBoundry(root, res) {
    let curr = root.right;
    let temp = [];
    while (curr) {
      if (!this.isLeaf(curr)) temp.push(curr.val);

      if (curr.right) {
        curr = curr.right;
      } else {
        curr = curr.left;
      }
    }

    for (let i = temp.length - 1; i >= 0; i--) {
      res.push(temp[i]);
    }
  }

  addLeaf(root, res) {
    if (this.isLeaf(root)) {
      res.push(root.val);
      return;
    }

    if (root.left) {
      this.addLeaf(root.left, res);
    }
    if (root.right) {
      this.addLeaf(root.right, res);
    }
  }

  printBoundry(root) {
    let ans = [];
    if (root === null) return ans;

    if(!this.isLeaf(root)){
      ans.push(root.val);
    }

    this.addLeftBoundry(root, ans);
    this.addLeaf(root, ans);
    this.addRightBoundry(root, ans);

    return ans;
  }
}

function printResult(result) {
  for (let val of result) {
    console.log(val + " ");
  }
  console.log();
}

//creating a BT
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7); // Fixed typo here

let solution = new Solution();
let result = solution.printBoundry(root); // Fixed variable name here

console.log("Boundary Traversal : ");
printResult(result);