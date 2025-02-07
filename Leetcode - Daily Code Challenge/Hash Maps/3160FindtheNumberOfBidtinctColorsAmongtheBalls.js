/* 3160 Find the Number of Distinct colors Among the balls
07 Feb 25, Leetcode POTD, Array, HashMaps
Input: limit = 4, queries = [[1,4],[2,5],[1,3],[3,4]]

Output: [1,2,2,3]
*/

/*In this we need to take two maps, one for 
color and count, which give the unique color 
count, and also we need ballMap, because with
queries in ballMap, color of ball will also 
change. TC: O(n), SC: O(n)
*/
var queryResults = function (limit, queries) {
    let len = queries.length;
    let result = [];
    let colorMap = new Map(); //color->count
    let ballMap = new Map(); //ball -> color

    for (let i = 0; i < len; i++) {
        let ball = queries[i][0];
        let color = queries[i][1];
        //now check, if we have this ball is
        //already colored or not
        if (ballMap.has(ball)) {
            let prevColor = ballMap.get(ball);
            colorMap.set(prevColor, colorMap.get(prevColor) - 1);

            if (colorMap.get(prevColor) === 0) {
                //if that color is become zero, remove that
                colorMap.delete(prevColor);
            }
        }
        //otherwise push that into ball and increase the count
        ballMap.set(ball, color);
        colorMap.set(color, (colorMap.get(color) || 0) + 1);

        result[i] = colorMap.size;
    }
    return result;
};