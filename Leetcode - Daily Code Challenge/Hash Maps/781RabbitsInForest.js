/* 781. Rabbits in Forest
20 April 25, Leetcode POTD
*/
var numRabbits = function(answers) {
    const freq = {};
    for (const a of answers) {
        freq[a] = (freq[a] || 0) + 1;
    }

    let count = 0;
    for (const k in freq) {
        const key = parseInt(k);
        const v = freq[k];
        const groupSize = key + 1;
        const groups = Math.ceil(v / groupSize);
        count += groups * groupSize;
    }

    return count;
};


/*In this we will have x which is answer given by rabit,
groupSize will be x+1, means in this group, we have x+1 rabbits
now find the groups in which multple rabbits will there
groups = count / groupSize, count is x ans given by multiple rabit
rabbits find groups * groupSize
TC: O(n), SC: O(n)
*/
var numRabbits = (answers) => {
    let freq = new Map();
    for(let ans of answers){
        freq.set(ans, (freq.get(ans) || 0)+1);
    }

    let totalRabbit = 0;
    //iterte over the freq map
    //x is answer given, count will how many times x is there
    for(let [x, count] of freq){
        let groupSize = x+1;
        let group = Math.ceil(count / groupSize);

        totalRabbit += group * groupSize;
    }
    return totalRabbit;
}