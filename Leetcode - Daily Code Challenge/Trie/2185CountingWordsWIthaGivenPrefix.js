/* 2185. Counting Words With a Given Prefix
09 Jan 25, Leetcode POTD, String, Prefix Mathcing, Trie

Input: words = ["pay","attention","practice","attend"], pref = "at"
Output: 2
Explanation: The 2 strings that contain "at" as a prefix are: "attention" and "attend".
*/

/*Naive Approach, we use the inbuilt function of JS, 
startsWith to check is word is starting with the prefix
TC: O(n*m), n is words arr len and m is prefix len
SC: O(1)
*/
var prefixCount = function(words, pref) {
    let count = 0;
    for(let word of words){
        if(word.startsWith(pref)){
            count++;
        }
    }
    return count;
};


/*Other way for prefix is that we can use the Trie,
becuse this Data Structure is really helpful for finding
prefix and suffix types question, because in this at every
char we know from how many words started.
TC: O(n * l + m) n is num of words, l is for inserting the
word in trie, and m is for prefix searching
SC: O(n*l)
*/
//implement Node
class Node{
    constructor(){
        this.children = Array(26).fill(null);
        this.isWordEnd = false;
        this.prefixCount = 0;
    }
}
class Trie{
    constructor(){
        this.root = new Node();
    }
    insert(word){
        let curr = this.root; //curr pointer to move on trie
        for(let i=0; i<word.length; i++){
            let idx = word.charCodeAt(i) - 'a'.charCodeAt(0);
            if(curr.children[idx] === null){
                //add new Node is curr Node is null
                curr.children[idx] = new Node();
            }
            curr = curr.children[idx];
            curr.prefixCount++;
        }
        curr.isWordEnd = true;
    }
    search(prefix){
        let curr = this.root;
        for(let i=0; i<prefix.length; i++){
            let idx = prefix.charCodeAt(i) - 'a'.charCodeAt(0);
            if(curr.children[idx] === null){
                return 0; //no prefix
            }
            curr = curr.children[idx];
        }
        return curr.prefixCount;
    }
}
var prefixCount = function(words, pref) {
    let trie = new Trie();
    //insert the word
    for(let word of words){ //O(n)
        trie.insert(word); //O(l) l is length of each word
        //overall TC: O(n * l)
    }

    return trie.search(pref); //O(m) m is len of prefix to search
};