/* 3208 Alternating Groups
09 March 25, Leetcode POTD
There is a circle of red and blue tiles. You are given an array of integers colors and an integer k. The color of tile i is represented by colors[i]:

colors[i] == 0 means that tile i is red.
colors[i] == 1 means that tile i is blue.
An alternating group is every k contiguous tiles in the circle with alternating colors (each tile in the group except the first and last one has a different color from its left and right tiles).

Return the number of alternating groups.

Note that since colors represents a circle, the first and the last tiles are considered to be next to each other.
*/


/*Brute Method, in this we use the nested loop
TC: O(n^2), SC: O(1)
*/
var numberOfAlternatingGroups = function(colors, k) {
    let len = colors.length;
    //now push the k elem in colors array
    for(let i=0; i<k-1; i++){
        colors.push(colors[i]);
    }
    let result = 0;
    //now use the nested loop
    for(let i=0; i<len; i++){
        let alternative = true;
        for(let j=i; j<i+k-1; j++){
            if(colors[j] === colors[j+1]){
                alternative = false;
                break;
            }
        }
        if(alternative){
            result++;
        }
    }
    return result;
};


/*Optimal Method, use of Slding Window
TC: O(n+k), SC: O(1)
*/
var numberOfAlternatingGroups = function(colors, k) {
    let len = colors.length;
    let N = len + (k-1);
    //need to push the k-1 elem in colors
    for(let i=0; i<k-1; i++){
        colors.push(colors[i]);
    }
    let i=0; j=1; //j=1 to check the prev one
    let result = 0;
    while(j < N){
        if(colors[j] === colors[j-1]){
            //make i to j
            i = j;
            j++;
            continue;
        }

        if(j-i+1 === k){
            result++;
            i++;
        }
        j++;
    }
    return result;
};