/* 88. Merge Sorted Array
14 sept 2025, leetcode easy
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

*/

/*Need to fill the nums1 array, so take 3
elements i for nums1 len, j for nums2 len
and k for m+n len, now compare nums2 val
and use the mergeSort logic
TC: O(n), SC: O(1)
*/
var merge = function(nums1, m, nums2, n) {
    let i = m-1;
    let j = n-1;
    let k = m+n-1;
    while(j >= 0){
        //now compare nums1 and nums2
        if(i >= 0 && nums1[i] > nums2[j]){
            //so put at kth nums1 elem
            nums1[k] = nums1[i];
            k--;
            i--;
        }else{
            nums1[k] = nums2[j];
            k--;
            j--;
        }
    }
    return nums1;
};