/* 1865. Finding Pairs With A Certain Sum
06 July 2025, Leetcode Meidum



Input
["FindSumPairs", "count", "add", "count", "count", "add", "add", "count"]
[[[1, 1, 2, 2, 2, 3], [1, 4, 5, 2, 5, 4]], [7], [3, 2], [8], [4], [0, 1], [1, 1], [7]]
Output
[null, 8, null, 2, 1, null, null, 11]

Explanation
FindSumPairs findSumPairs = new FindSumPairs([1, 1, 2, 2, 2, 3], [1, 4, 5, 2, 5, 4]);
findSumPairs.count(7);  // return 8; pairs (2,2), (3,2), (4,2), (2,4), (3,4), (4,4) make 2 + 5 and pairs (5,1), (5,5) make 3 + 4
findSumPairs.add(3, 2); // now nums2 = [1,4,5,4,5,4]
findSumPairs.count(8);  // return 2; pairs (5,2), (5,4) make 3 + 5
findSumPairs.count(4);  // return 1; pair (5,0) makes 3 + 1
findSumPairs.add(0, 1); // now nums2 = [2,4,5,4,5,4]
findSumPairs.add(1, 1); // now nums2 = [2,5,5,4,5,4]
findSumPairs.count(7);  // return 11; pairs (2,1), (2,2), (2,4), (3,1), (3,2), (3,4), (4,1), (4,2), (4,4) make 2 + 5 and pairs (5,3), (5,5) make 3 + 4

*/



//TC: O(n+m), SC: O(n+m)
class FindSumPairs {
    constructor(nums1, nums2) {
        this.nums1 = nums1;
        this.nums2 = nums2;
        this.map = new Map();

        //now put the nums2 in map
        for (let num of this.nums2) {//O(m)
            this.map.set(num, (this.map.get(num) || 0) + 1);
        }
    }
    add(index, val) {
        //for adding, we need to go to map of nums2 and 
        //decrease the old value and add the new one
        let oldVal = this.nums2[index];
        //now decrease this old val from map
        this.map.set(oldVal, this.map.get(oldVal) - 1);
        if (this.map.get(oldVal) === 0) this.map.delete(oldVal);
        //now add the val into nums2 array
        this.nums2[index] += val;
        let newVal = this.nums2[index];
        this.map.set(newVal, (this.map.get(newVal) || 0)+1);
    }
    count(tot){
        let total = 0;
        //now iterate over the nums1
        for(let num of this.nums1){ //O(n)
            let remaining = tot-num;
            total += this.map.get(remaining) || 0;
        }
        return total;
    }
}