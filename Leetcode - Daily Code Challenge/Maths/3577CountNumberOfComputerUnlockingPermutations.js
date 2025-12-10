/*3577. Count the number of computer unlocking permutations
10 Dec 2025, leetcode potd, medium
*/

var countPermutations = function(complexity) {
    const M = 1e9+7;
    let len = complexity.length;
    let result = 1;
    for(let i=1; i<len; i++){
        if(complexity[i] <= complexity[0]){
            return 0;
        }
        result = (result * i)%M;
    }
    return result;
};