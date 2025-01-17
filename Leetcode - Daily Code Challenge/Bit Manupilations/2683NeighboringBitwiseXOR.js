/* 2683. Neighboring Bitwise XOR
17 Jan 2024, Leetcode POTD, Array, Bitwise Operator
Input: derived = [1,1,0]
Output: true
Explanation: A valid original array that gives derived is [0,1,0].
derived[0] = original[0] ⊕ original[1] = 0 ⊕ 1 = 1 
derived[1] = original[1] ⊕ original[2] = 1 ⊕ 0 = 1
derived[2] = original[2] ⊕ original[0] = 0 ⊕ 0 = 0
*/

//TC: O(2n)~O(n), SC: O(n)
var doesValidArrayExist = function(derived) {
    let len = derived.length;
    let original = [];

    //now take original[0]=0;
    original[0] = 0;
    for(let i=0; i<len-1; i++){
        original[i+1] = original[i] ^ derived[i];
    }

    if(original[len-1] ^ original[0] === derived[len-1]){
        return true;
    }

    //now take original[0]=1;
    for(let i=0; i<len-1; i++){
        original[i+1] = original[i] ^ derived[i];
    }

    if(original[len-1] ^ original[0] === derived[len-1]){
        return true;
    }

    return false;
};


//TC: O(n), SC:O(1)
var doesValidArrayExist = function(derived) {
    let xor = 0;
    for(let num of derived){
        xor ^= num;
    }
    return xor === 0;
};