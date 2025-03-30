/* 763. Parition Labels
30 March 25, Leetcode POTD
Input: s = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.
*/

/*Method1, in this, we use the Two Pointer,
in which we have will have set the freq of 
last occurence of each char.
TC: O(n), SC: O(26)~O(1)
*/
var partitionLabels = function(s) {
    let len = s.length;
    let result = [];
    let chMap = Array(26).fill(-1);

    //now set the last idx of char
    for(let i=0; i<len; i++){
        let ch = s.charCodeAt(i)-'a'.charCodeAt(0);
        chMap[ch]=i;
    }

    //now use the Two Pointer
    let i=0;
    while(i < len){
        let end = chMap[s.charCodeAt(i) - 'a'.charCodeAt(0)];
        let j=i;
        while(j < end){
            //see the max end
            end = Math.max(end, chMap[s.charCodeAt(j) - 'a'.charCodeAt(0)]);
            j++;
        }
        result.push(j-i+1);
        i = j+1; //move i to next window for checking
    }
    return result;
};



/*In Method2, we can use the sam two pointer, but in this, 
we can use the start and end pointer and move i poionter
itself. TC: O(n), SC: O(26)~O(1)
*/
var partitionLabels = function(s) {
    let len = s.length;
    let result= [];
    let chMap = Array(26).fill(0);
    //now fill the last occurence of each char
    for(let i=0; i<len; i++){
        let ch = s.charCodeAt(i) - 'a'.charCodeAt(0);
        chMap[ch] = i;
    }

    //now use the pointers
    let start = 0;
    let i=0;
    let end = 0;
    while(i < len){
        end = Math.max(end, chMap[s.charCodeAt(i) - 'a'.charCodeAt(0)]);
        if(i === end){
            //i reaches at char end, push that in result
            result.push(end-start+1);
            start = end+1;
        }
        i++;
    }
    return result;
};