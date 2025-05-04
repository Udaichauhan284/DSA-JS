/* 1128. Number of Equivalent Domino Pairs
04 may 2025, Leetcode POTD, EASY
Given a list of dominoes, dominoes[i] = [a, b] is equivalent to dominoes[j] = [c, d] if and only if either (a == c and b == d), or (a == d and b == c) - that is, one domino can be rotated to be equal to another domino.

Return the number of pairs (i, j) for which 0 <= i < j < dominoes.length, and dominoes[i] is equivalent to dominoes[j].

Input: dominoes = [[1,2],[2,1],[3,4],[5,6]]
Output: 1
*/

//TC: O(n^2), SC: O(1)
var numEquivDominoPairs = function (dominoes) {
    let len = dominoes.length;
    let count = 0;
    for (let i = 0; i < len; i++) {
        let a = dominoes[i][0];
        let b = dominoes[i][1];
        for (let j = i + 1; j < len; j++) {
            let c = dominoes[j][0];
            let d = dominoes[j][1];
            if((a === c && b === d) || (a===d && b === c)){
                count++;
            }
        }
    }
    return count;
};

/*In optimal method, we take the array, as element goes till <=9
so if in [9,9] that will make 99, less then 100, so we take the
array 100, and in that, we put the elem in form of 12,21,22 like 
that, and in this we follow that a >= b, so that we can easily form
to make the pair. TC: O(n), SC: O(1)
*/
const numEquivDominoPairs = (dominoes) => {
    let len = dominoes.length;
    let count = 0;
    let arr = Array(100).fill(0);

    //now iterate over the dominoes , first swap the a,b if a is greater then b
    //then, change the elems to num and store it in array
    for(let [a,b] of dominoes){
        if(a > b){
            [a,b] = [b,a]; //swap
        }

        //now make the num from elems
        let num = a*10+b; //1*10+2 => 12
        //add that num freq from array to count
        count += arr[num];
        //increase the freq in arr for that num
        arr[num]++;
    }
    return count;
}