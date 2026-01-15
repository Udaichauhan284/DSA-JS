/* 2943. Maximixe Area of Square Hole in Grid
15 Jan 2026, Leetcode POTD, Medium
You are given the two integers, n and m and two integer arrays, hBars and vBars. The grid has n + 2 horizontal and m + 2 vertical bars, creating 1 x 1 unit cells. The bars are indexed starting from 1.

You can remove some of the bars in hBars from horizontal bars and some of the bars in vBars from vertical bars. Note that other bars are fixed and cannot be removed.

Return an integer denoting the maximum area of a square-shaped hole in the grid, after removing some bars (possibly none).
*/

var maximizeSquareHoleArea = function(n, m, hBars, vBars) {
    // 1st Step: Sort the inputs
    hBars.sort((a, b) => a - b);
    vBars.sort((a, b) => a - b);

    let maxConsecutiveHBars = 1;
    let maxConsecutiveVBars = 1;

    // Find longest consecutive horizontal bars
    let currConsecutiveHBars = 1;
    for (let i = 1; i < hBars.length; i++) {
        if (hBars[i] - hBars[i - 1] === 1) {
            currConsecutiveHBars++;
        } else {
            currConsecutiveHBars = 1;
        }
        maxConsecutiveHBars = Math.max(
            maxConsecutiveHBars,
            currConsecutiveHBars
        );
    }

    // Find longest consecutive vertical bars
    let currConsecutiveVBars = 1;
    for (let i = 1; i < vBars.length; i++) {
        if (vBars[i] - vBars[i - 1] === 1) {
            currConsecutiveVBars++;
        } else {
            currConsecutiveVBars = 1;
        }
        maxConsecutiveVBars = Math.max(
            maxConsecutiveVBars,
            currConsecutiveVBars
        );
    }

    // Square side length = min(consecutive horizontal, consecutive vertical) + 1
    const side = Math.min(maxConsecutiveHBars, maxConsecutiveVBars) + 1;

    return side * side;
};


/*In this, for getting the max area, we need to increase
the width and hight, so for increasing the width, we
need to remove the consecutive vBars one by one
same for height need to remove the hBars, atlast
for finding the side, we want equal sides,so we will 
have min of maxWidth and maxHeight + 1, why plus 1, 
at 1,2,3, we have vBars if we remove 2, how much widht
we have 3-1 = 2 width.
for consecutive iterating we will sort the vBars and 
hBars values.
TC: O(hlogh + vlogv)
SC: O(1)
*/
var maximizeSquareHoleArea = function(n, m, hBars, vBars) {
    //first sort the arrays of Bars, so we can remove consecutively
    hBars.sort((a,b) => a-b);
    vBars.sort((a,b) => a-b);

    let maxWidth = 1; //longest width we will get, start from 1, in the starting from 1, in question
    let maxHeight = 1; //longest height

    let currWidth = 1; //for getting the width, need to remove the vBars, so iterate on that, and remove consecutive ones
    for(let i=1; i<vBars.length; i++){
        if(vBars[i] - vBars[i-1] === 1){
            currWidth++;
        }else{
            currWidth = 1;
        }
        maxWidth = Math.max(maxWidth, currWidth);
    }

    //now start removing the hBars, for getting the height
    let currHeight = 1;
    for(let i=1; i<hBars.length; i++){
        if(hBars[i]-hBars[i-1] === 1){
            currHeight++;
        }else{
            currHeight = 1;
        }
        maxHeight = Math.max(maxHeight, currHeight);
    }

    //Square width and height must be same. We can reduce the larger one to match the smaller one
    // So, take the minimum of them.
    let side = Math.min(maxWidth, maxHeight)+1; 
    return side*side;
};