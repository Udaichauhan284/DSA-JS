/* 401. Binary Watch
17 Feb 2026, Leetcode POTD, EASY
*/

var readBinaryWatch = function (turnedOn) {
    let ans = [];
    for (let h = 0; h < 12; h++) {
        for (let m = 0; m < 60; m++) {
        if (
            h.toString(2).split("0").join("").length +
            m.toString(2).split("0").join("").length ===
            turnedOn
        ) {
            ans.push(h + ":" + (m < 10 ? "0" : "") + m);
        }
        }
    }
    return ans;
};
