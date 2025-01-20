/* 2661 First Completely Painted Row or Col
20 Jan 25, Leetcode POTD, Array

Input: arr = [1,3,4,2], mat = [[1,4],[2,3]]
Output: 2
Explanation: The moves are shown in order, and both the first row and second column of the matrix become fully painted at arr[2].
*/

/*In Brute Method, we use the map, to store the mat value,
for easy access, then we traverse over the arr elem, and then
we mark that painted, and we look for row is painted or col
is painted or not.
TC: O(n*m + s*(n+m)), SC: O(n*m)
*/
var firstCompleteIndex = function(arr, mat) {
    let n = mat.length;
    let m = mat[0].length;
    let map = new Map();
    //now traverse over the mat
    for(let row=0; row<n; row++){ //O(n*m)
        for(let col=0; col<m; col++){
            let val = mat[row][col];
            map.set(val, [row,col]);
        }
    }

    //now traverse over the arr eleme
    for(let i=0; i<arr.length; i++){//O(s * (n+m))
        let curVal = arr[i];
        let [row, col] = map.get(curVal);
        mat[row][col] *= -1; //painted that currvalue cell

        if(checkRowPainted(mat, row) || checkColPainted(mat,col)){
            return i;
        }
    }
    return -1;
};
function checkRowPainted(mat, row){ //O(n)
    for(let col=0; col<mat[0].length; col++){
        if(mat[row][col] > 0){
            return false;
        }
    }
    return true;
}
function checkColPainted(mat, col){ //O(m)
    for(let row=0; row<mat.length; row++){
        if(mat[row][col] > 0){
            return false;
        }
    }
    return true;
}





/*In Optimal Method, we need to use reverse map, means we need to 
use map for arr, and place all elem for arr in map, then we need to
traverse over the row * col one by one row, to check the lastINdex
which is maxIndex, in all the row, we find the minIndex, because
when when that minIndex painted, we got the whole row painted,
same we do for the col.
TC: O(n*m + n*m) ~ O(n*m), SC: O(n)
*/
var firstCompleteIndex = function(arr, mat) {
    let n = mat.length;
    let m = mat[0].length;
    let map = new Map();
    //now traverse over the arr
    for(let i=0; i<arr.length; i++){
        let val = arr[i];
        map.set(val, i);
    }

    let minIndex = Infinity;
    //now traverse over the row one by one, to find the lastIndex
    for(let row=0; row<n; row++){
        let lastIndex = -1;
        for(let col=0; col<m; col++){
            let currVal = mat[row][col];
            let idx = map.get(currVal);
            lastIndex = Math.max(lastIndex, idx);
        }
        minIndex = Math.min(minIndex, lastIndex);
    }

    //now traverse over the col one by one
    for(let col=0; col<m; col++){
        let lastIndex = -1;
        for(let row=0; row<n; row++){
            let currVal = mat[row][col];
            let idx = map.get(currVal);
            lastIndex = Math.max(lastIndex, idx);
        }
        minIndex = Math.min(minIndex, lastIndex);
    }
    return minIndex;
};