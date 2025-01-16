/* 2425. bitwise XOR of All Pairings
16 Jan 25, Leetcode POTD, Bit Manipulations

Input: nums1 = [2,1,3], nums2 = [10,2,5,0]
Output: 13
Explanation:
A possible nums3 array is [8,0,7,2,11,3,4,1,9,1,6,3].
The bitwise XOR of all these numbers is 13, so we return 13.
*/

/*In method1, we use the map, and in map, we put the 
freq for num1 elem and nums2 elem, for nums1 elem
we will put the len of nums2 array, and for nums2
elem we put the len of nums1 array, if the freq is odd
for elem, we find out the ans, even freq elem, will 
cancel each other in XOR
TC: O(n), SC: O(n)
*/
var xorAllNums = function(nums1, nums2) {
    let len1 = nums1.length;
    let len2 = nums2.length;
    let map = new Map();

    for(let num of nums1){
        //for nums1 we will add len2 length
        map.set(num, (map.get(num) || 0)+len2);
    }

    for(let num of nums2){
        //for nums2 we will add len1 length
        map.set(num, (map.get(num) || 0)+len1);
    }

    let result = 0;
    for(let [num, freq] of map){
        if(freq%2 === 1){
            result ^= num;
        }
    }
    return result;
};


/*Method2, we know the even num xor will be zero, so
only odd len elem will give ans, so we will find out the len
of nums1 is odd, nums2 will give ans, and nums2 len is odd
nums1 will give the ans.
TC: O(n), SC: O(1)
*/
var xorAllNums = function(nums1, nums2) {
    let len1 = nums1.length;
    let len2 = nums2.length;

    let XOR = 0;
    
    //now check the len of len1
    if(len1%2 === 1){
        //if len1 is odd, measn nums2 elem will give the ans
        for(let num of nums2){
            XOR ^= num;
        }
    }

    //now check the len of len2
    if(len2%2 === 1){
        //if len2 is odd, means nums1 elem will give the ans
        for(let num of nums1){
            XOR ^= num;
        }
    }

    return XOR;
};