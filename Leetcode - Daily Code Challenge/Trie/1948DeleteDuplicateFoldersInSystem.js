/* 1948. Delete Duplicate Folders in System
20 July 2025, Leetcode POTD HARD

Input: paths = [["a"],["c"],["d"],["a","b"],["c","b"],["d","a"]]
Output: [["d"],["d","a"]]
Explanation: The file structure is as shown.
Folders "/a" and "/c" (and their subfolders) are marked for deletion because they both contain an empty
folder named "b".
*/

var deleteDuplicateFolder = function(paths) {
    class Node {
        constructor(val = '') {
            this.val = val;
            this.subFolder = '';
            this.children = new Map();
        }
    }

    function getNode(val) {
        return new Node(val);
    }

    function insert(root, path) {
        for (const folder of path) {
            if (!root.children.has(folder)) {
                root.children.set(folder, getNode(folder));
            }
            root = root.children.get(folder);
        }
    }

    function populateNodes(root, subFolderMap) {
        let subFolderPaths = [];

        for (const [childName, child] of root.children.entries()) {
            const subFolderResult = populateNodes(child, subFolderMap);
            subFolderPaths.push([childName, subFolderResult]);
        }

        subFolderPaths.sort((a, b) => a[0].localeCompare(b[0]));

        let completePath = '';
        for (const [childName, childPath] of subFolderPaths) {
            completePath += `(${childName}${childPath})`;
        }

        root.subFolder = completePath;

        if (completePath.length > 0) {
            subFolderMap.set(completePath, (subFolderMap.get(completePath) || 0) + 1);
        }

        return completePath;
    }

    function removeDuplicates(root, subFolderMap) {
        for (const [childName, child] of [...root.children]) {
            if (child.subFolder && subFolderMap.get(child.subFolder) > 1) {
                root.children.delete(childName);
            } else {
                removeDuplicates(child, subFolderMap);
            }
        }
    }

    function constructResult(root, path, result) {
        for (const [childName, child] of root.children) {
            path.push(childName);
            result.push([...path]);
            constructResult(child, path, result);
            path.pop();
        }
    }

    const root = getNode('/');
    for (const path of paths) {
        insert(root, path);
    }

    const subFolderMap = new Map();
    populateNodes(root, subFolderMap);

    removeDuplicates(root, subFolderMap);

    const result = [];
    const path = [];
    constructResult(root, path, result);

    return result;
};
