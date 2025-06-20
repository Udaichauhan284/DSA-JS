/* 3443. Maximum Manhattan Distance After K Changes
20 June 2025, Leetcode POTD Medium
Input: s = "NWSE", k = 1

Output: 3

Explanation:

Change s[2] from 'S' to 'N'. The string s becomes "NWNE".
*/ 

//TC: O(n), SC: O(1)
var maxDistance = function(s, k) {
    let maxD = 0;
    let east = 0, west=0, south=0, north=0;
    for(let i=0; i<s.length; i++){
        if(s[i] === 'N') north++;
        else if(s[i] === 'S') south++;
        else if(s[i] === 'E') east++;
        else if(s[i] === 'W') west++;

        let currMD = Math.abs(east-west)+Math.abs(north-south);

        let steps = i+1;
        let wasted = steps - currMD;
        let extra = 0;
        if(wasted !== 0){
            extra = Math.min(2*k, wasted);
        }

        let finalSteps = currMD+extra;

        maxD = Math.max(maxD, finalSteps);
    }
    return maxD;
};