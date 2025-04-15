/* 2179 COunt Good Triplet in An Array
15 April 25, Leetcode POTD, Hard
Input: nums1 = [2,0,1,3], nums2 = [0,1,2,3]
Output: 1
Explanation: 
There are 4 triplets (x,y,z) such that pos1x < pos1y < pos1z. They are (2,0,1), (2,0,3), (2,1,3), and (0,1,3). 
Out of those triplets, only the triplet (0,1,3) satisfies pos2x < pos2y < pos2z. Hence, there is only 1 good triplet.

*/


class FenwickTree{
    constructor(size){
        this.tree = new Array(size+1).fill(0);
    }
    update(index, delta){
        index++;
        while(index < this.tree.length){
            this.tree[index] += delta;
            index += index & -index;
        }
    }

    query(index){
        index++;
        let res = 0;
        while(index > 0){
            res += this.tree[index];
            index -= index & -index;
        }
        return res;
    }
}
var goodTriplets = function(nums1, nums2) {
    const len = nums1.length;
    const pos2 = new Array(len);
    const reversedIndexMapping = new Array(len);
    for(let i=0; i<len; i++){
        pos2[nums2[i]] = i;
    }

    for(let i=0; i<len; i++){
        reversedIndexMapping[pos2[nums1[i]]] = i;
    }

    const tree = new FenwickTree(len);
    let res = 0;
    for(let value = 0; value < len; value++){
        const pos = reversedIndexMapping[value];
        const left = tree.query(pos);
        tree.update(pos,1);
        const right = len-1-pos-(value-left);
        res += left * right;
    }
    return res;
};