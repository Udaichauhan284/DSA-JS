/* 1061. Lexicographically Smallest Equivalent String
05 June 2025, Leetcode POTD Medium
Input: s1 = "parker", s2 = "morris", baseStr = "parser"
Output: "makkek"
Explanation: Based on the equivalency information in s1 and s2, we can group their characters as [m,p], [a,o], [k,r,s], [e,i].
The characters in each group are equivalent and sorted in lexicographical order.
So the answer is "makkek".
*/

/*In this s1 and s2 at same index we can move from s1[i]
char to s2[i] char, so from baseStr we need to form the
smallest string, using this mapping of s1 and s2
we can start the dfs from every char in baseStr and in
dfs we will find the minChar
TC: O(m * (V+E)), m is len of baseStr
SC: O(V+E)
*/

var smallestEquivalentString = function(s1, s2, baseStr) {
    let len = s1.length;
    //let baseLen = baseStr.length;

    //let make the adj graph
    let adj = new Map();
    for(let i=0; i<len; i++){
        let u = s1[i];
        let v = s2[i];
        if(!adj.has(u)) adj.set(u, []);
        if(!adj.has(v)) adj.set(v, []);

        adj.get(u).push(v);
        adj.get(v).push(u);
    }
    let result = "";
    for(let ch of baseStr){
        let visited = Array(26).fill(false);
        result += dfsMinChar(ch,adj,visited);
    }
    return result;
};
function dfsMinChar(currCh, adj, visited){
    //mark the curr ch visited
    visited[currCh.charCodeAt(0) - 'a'.charCodeAt(0)] = true;

    let minChar = currCh; //for now this is minChar

    //now need to iterate over the adj, to find the minChar
    //where we can move from currCh
    for(let nextChar of adj.get(currCh) || []){
        //check if nextChar is not visited
        if(visited[nextChar.charCodeAt(0) - 'a'.charCodeAt(0)] === false){
            let temp = dfsMinChar(nextChar, adj, visited);
            if(temp < minChar){
                minChar = temp;
            }
        }
    }
    return minChar;
}