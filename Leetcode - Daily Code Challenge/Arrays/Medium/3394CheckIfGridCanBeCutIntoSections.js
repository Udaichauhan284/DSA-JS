/*3394 Check if Grid Can be cut into sections
25 March 25, leetcode POTD
Input: n = 5, rectangles = [[1,0,5,2],[0,2,2,4],[3,2,5,3],[0,4,4,5]]

Output: true
*/

/*In this question, we need to make the section horizontal
or verticle, first we will seprate the hor and ver 
and merge to form the whole block and then we merge based
on end > or < then start point.
TC: O(nlogn), SC:O(n)
*/
var checkValidCuts = function(n, rectangles) {
    const check = (intervals) => {
        intervals.sort((a, b) => a[0] - b[0]);
        
        let sections = 0;
        let maxEnd = intervals[0][1];

        for (let [start, end] of intervals) {
            if (maxEnd <= start) {
                sections++;
            }
            maxEnd = Math.max(maxEnd, end);
        }

        return sections >= 2;
    };

    let xIntervals = rectangles.map(rect => [rect[0], rect[2]]);
    let yIntervals = rectangles.map(rect => [rect[1], rect[3]]);

    return check(xIntervals) || check(yIntervals);
};