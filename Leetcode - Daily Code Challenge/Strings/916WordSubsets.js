/* 918. Word Subsets
10 Jan 25, Leetcode POTD, String, Count the freq and use the 26 array for that

Input: words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["e","o"]
Output: ["facebook","google","leetcode"]
*/

/*In this first i need to count the freq of words2
and need to see how much freq we needs from words1 words
then we need to set the freq of words1 word also and 
then compare, if freq of words2 is greater then current
word freq, we need return the false, otherwise True
TC: O(n*l + m*l*26) ~ O(n*l + m*l)
SC: O(26)~O(1)
*/
const wordSubsets = (words1, words2) => {
    let freq = Array(26).fill(0); //we have only lowercase letters, so 26 array is uses
    //to store the freq of words2 array
    for(let word of words2){
        //first i will take temp array, to maintain the
        //curr word freq, and in next we want greater freq
        //we can switch use of Max
        let temp = Array(26).fill(0);
        for(let ch of word){
            let chrIdx = ch.charCodeAt(0) - 'a'.charCodeAt(0);
            temp[chrIdx]++;

            // Take the maximum frequency
            freq[chrIdx] = Math.max(freq[chrIdx], temp[chrIdx]);
        }
    }

    //now fill the words1 freq and compare
    let result = [];
    for(let word of words1){
        let temp = Array(26).fill(0);
        for(let ch of word){
            let chrIdx = ch.charCodeAt(0) - 'a'.charCodeAt(0);
            temp[chrIdx]++;
        }
        //now check both the temp and freq Array
        if(isSubsets(temp, freq)){
            result.push(word);
        }
    }
    return result;
}
function isSubsets(temp, freq){
    //now these array fo 26, so traverse over
    for(let i=0; i<26; i++){//TC: O(26)~O(1)
        if(temp[i] < freq[i]){
            return false;
             //means currWord freq in temp is less then 
            //compare word freq of wrods2, return false;
        }
    }
    return true;
}