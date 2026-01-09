var subtreeWithAllDeepest = function(root) {
     const depthMap = new Map(); 
    let maxD = 0;

    // Step 1: Compute depth of each node
    function depth(node, d) {
        if (!node) return;

        maxD = Math.max(maxD, d);
        depthMap.set(node.val, d);

        depth(node.left, d + 1);
        depth(node.right, d + 1);
    }

    // Step 2: Find LCA of deepest leaves
    function LCA(node) {
        if (!node || depthMap.get(node.val) === maxD) {
            return node;
        }

        const left = LCA(node.left);
        const right = LCA(node.right);

        if (left && right) {
            return node;
        }

        return left !== null ? left : right;
    }

    depth(root, 0);
    return LCA(root);
};