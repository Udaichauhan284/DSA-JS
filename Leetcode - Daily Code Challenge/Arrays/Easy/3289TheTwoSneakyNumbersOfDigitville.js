var getSneakyNumbers = function (nums) {
    const res = [];
    const count = new Map();
    for (const x of nums) {
        count.set(x, (count.get(x) || 0) + 1);
        if (count.get(x) === 2) {
            res.push(x);
        }
    }
    return res;
};