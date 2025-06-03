/* 1298. Maximum Candies You Can Get from Boxes
03 June 25, Leetcode POTD, HARD

Input: status = [1,0,1,0], candies = [7,5,4,100], keys = [[],[],[1],[]], containedBoxes = [[1,2],[3],[],[]], initialBoxes = [0]
Output: 16
Explanation: You will be initially given box 0. You will find 7 candies in it and boxes 1 and 2.
Box 1 is closed and you do not have a key for it so you will open box 2. You will find 4 candies and a key to box 1 in box 2.
In box 1, you will find 5 candies and box 3 but you will not find a key to box 3 so box 3 will remain closed.
Total number of candies collected = 7 + 4 + 5 = 16 candy.
*/

/*In this we can use the dfs, because from initialBox we can move to different boxes
TC: O(n), SC: O(n) recursion stack space
*/
var maxCandies = function(status, candies, keys, containedBoxes, initialBoxes) {
    let visited = new Set();
    let foundBox = new Set();
    let candiesCount = 0;
    //now iterate over the initialBoxes
    for(let box of initialBoxes){
        candiesCount += dfs(box, status, candies, keys, containedBoxes, visited, foundBox);
    }
    return candiesCount;
};
function dfs(box,status,candies,keys,containedBoxes,visited,foundBox){
    //now check the visited and status of box
    if(visited.has(box)){
        return 0; //already visited
    }
    if(status[box] === 0){
        foundBox.add(box); //put the curr box in found one, because it is closed
        //but we found it, it can we open later
        return 0; //box is closed
    }
    visited.add(box); //mark visited
    let candiesCount = candies[box];
    //now move to cantainedBoxed
    for(let insideBox of containedBoxes[box]){
        candiesCount += dfs(insideBox,status,candies,keys,containedBoxes,visited,foundBox);
    }
    //now iterate over the keys
    for(let boxKey of keys[box]){
        //now check the status
        status[boxKey] = 1;
        if(foundBox.has(boxKey)){
            candiesCount += dfs(boxKey,status,candies,keys,containedBoxes,visited,foundBox);
        }
    }
    return candiesCount;
}