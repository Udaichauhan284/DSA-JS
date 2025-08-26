/*3000. Maximum Area of Longest Diagonal Rectangle
26 Aug 2025, Leetcode POTD, Easy
Input: dimensions = [[9,3],[8,6]]
Output: 48
Explanation: 
For index = 0, length = 9 and width = 3. Diagonal length = sqrt(9 * 9 + 3 * 3) = sqrt(90) ≈ 9.487.
For index = 1, length = 8 and width = 6. Diagonal length = sqrt(8 * 8 + 6 * 6) = sqrt(100) = 10.
So, the rectangle at index 1 has a greater diagonal length therefore we return area = 8 * 6 = 48.
*/

/*TC: O(n), SC: O(1)
*/
const areaOfMaxDiagonal = (dimensions) => {
    let maxDiaSq = 0;
    let maxArea = 0;
    for(let [l,w] of dimensions){
        let diaSq = l*l+w*w;
        let area = l*w;
        if(diaSq > maxDiaSq){
            maxDiaSq = diaSq;
            maxArea = area;
        }else if(diaSq === maxDiaSq){
            maxArea = Math.max(maxArea, area);
        }
    }
    return maxArea;
}