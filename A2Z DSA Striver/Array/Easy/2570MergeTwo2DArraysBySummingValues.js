/*2570. Merge Two 2d Arrays by Summing Values
02 March 25, leetcode POTD, Array Easy
Input: nums1 = [[1,2],[2,3],[4,5]], nums2 = [[1,4],[3,2],[4,1]]
Output: [[1,6],[2,3],[3,2],[4,6]]
Explanation: The resulting array contains the following:
- id = 1, the value of this id is 2 + 4 = 6.
- id = 2, the value of this id is 3.
- id = 3, the value of this id is 2.
- id = 4, the value of this id is 5 + 1 = 6.
*/

/*Brute Method, use of Map, first store the nums1
value in map and then also store nums2 in map, add
value, then i will push map values from map to arr
then i will sort it out. TC: O(n+m + NlogN), SC: O(n+m)
*/
var mergeArrays = function(nums1, nums2) {
    let map = new Map();
    //store in map
    for(let [id,val] of nums1){
        map.set(id, val);
    }

    //now add from nums2
    let arr = [];
    for(let [id,val] of nums2){
        if(map.has(id)){
            map.set(id, map.get(id)+val);
        }else{
            map.set(id, val);
        }
    }

    for(let [id,val] of map){
        arr.push([id,val]);
    }
    return arr.sort((a,b) => a[0]-b[0]);
};


/*Optimal Approch use of Two Pointer Approach
TC: O(n+m), SC: O(1)
*/
var mergeArrays = function(nums1, nums2) {
    let len1 = nums1.length;
    let len2 = nums2.length;

    let ptr1 = 0, ptr2 = 0;
    let arr = [];
    while(ptr1 < len1 && ptr2 < len2){
        if(nums1[ptr1][0] < nums2[ptr2][0]){
            arr.push(nums1[ptr1]);
            ptr1++;
        }else if(nums2[ptr2][0] < nums1[ptr1][0]){
            arr.push(nums2[ptr2]);
            ptr2++;
        }else{
            arr.push([nums1[ptr1][0], nums1[ptr1][1] + nums2[ptr2][1]]);
            ptr1++;
            ptr2++;
        }
    }

    //now remaining one
    while(ptr1 < len1){
        arr.push(nums1[ptr1]);
        ptr1++;
    }
    while(ptr2 < len2){
        arr.push(nums2[ptr2]);
        ptr2++;
    }
    return arr;
};