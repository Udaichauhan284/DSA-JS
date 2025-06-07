/* 3170. Lexicographically Minimum String After Removing Stars

*/
var clearStars = function (s) {
    const cnt = Array(26)
        .fill()
        .map(() => []);
    const arr = s.split("");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== "*") {
            cnt[arr[i].charCodeAt(0) - "a".charCodeAt(0)].push(i);
        } else {
            for (let j = 0; j < 26; j++) {
                if (cnt[j].length > 0) {
                    arr[cnt[j].pop()] = "*";
                    break;
                }
            }
        }
    }
    return arr.filter((c) => c !== "*").join("");
};