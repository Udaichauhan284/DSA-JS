/* From Geeks for Geeks
Flatten BST To sorted List
You are given a Binary Search Tree (BST) with n nodes, each node has a distinct value assigned to it. The goal is to flatten the tree such that, the left child of each element points to nothing (NULL), and the right child points to the next element in the sorted list of elements of the BST (look at the examples for clarity). You must accomplish this without using any extra storage, except for recursive calls, which are allowed.

Note: If your BST does have a left child, then the system will print a -1 and will skip it, resulting in an incorrect solution.
*/
//TC: O(N), SC: O(n)
class Solution {
    public Node flattenBST(Node root) {
        // Code here
        if(root == null) return root;
        
        Node head = flattenBST(root.left);
        root.left = null;
        root.right = flattenBST(root.right);
        if(head != null){
            Node temp = head;
            while(temp.right != null){
                temp = temp.right;
            }
            temp.right = root;
        }else{
            head = root;
        }
        return head;
    }
}