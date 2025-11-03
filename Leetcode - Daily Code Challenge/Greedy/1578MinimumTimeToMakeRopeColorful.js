/* 1578. Minimum Time to Make Rope Colorful
03 Nov 2025, leetcode potd medium

*/

function minCost(colors, neededTime) {
    const n = colors.length;
    let time = 0;
    let prevMax = 0;

    for (let i = 0; i < n; i++) {
        if (i > 0 && colors[i] !== colors[i - 1]) {
        prevMax = 0;
        }

        const curr = neededTime[i];
        time += Math.min(prevMax, curr); // greedily remove the smaller time
        prevMax = Math.max(prevMax, curr);
    }

    return time;
}