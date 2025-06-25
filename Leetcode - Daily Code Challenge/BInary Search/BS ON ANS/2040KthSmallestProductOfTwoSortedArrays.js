/* 2040. Kth Smallest Product of Two Sorted Arrays
25 June 25, Leetcode POTD HARD
Input: nums1 = [2,5], nums2 = [3,4], k = 2
Output: 8
Explanation: The 2 smallest products are:
- nums1[0] * nums2[0] = 2 * 3 = 6
- nums1[0] * nums2[1] = 2 * 4 = 8
The 2nd smallest product is 8.

*/

var kthSmallestProduct = function (nums1, nums2, k) {
    const n1 = nums1.length,
        n2 = nums2.length;
    let pos1 = 0,
        pos2 = 0;
    while (pos1 < n1 && nums1[pos1] < 0) {
        pos1++;
    }
    while (pos2 < n2 && nums2[pos2] < 0) {
        pos2++;
    }
    let left = -1e10,
        right = 1e10;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        let count = 0;
        let i1 = 0,
            i2 = pos2 - 1;
        while (i1 < pos1 && i2 >= 0) {
            if (nums1[i1] * nums2[i2] > mid) {
                i1++;
            } else {
                count += pos1 - i1;
                i2--;
            }
        }
        i1 = pos1;
        i2 = n2 - 1;
        while (i1 < n1 && i2 >= pos2) {
            if (nums1[i1] * nums2[i2] > mid) {
                i2--;
            } else {
                count += i2 - pos2 + 1;
                i1++;
            }
        }
        i1 = 0;
        i2 = pos2;
        while (i1 < pos1 && i2 < n2) {
            if (nums1[i1] * nums2[i2] > mid) {
                i2++;
            } else {
                count += n2 - i2;
                i1++;
            }
        }
        i1 = pos1;
        i2 = 0;
        while (i1 < n1 && i2 < pos2) {
            if (nums1[i1] * nums2[i2] > mid) {
                i1++;
            } else {
                count += n1 - i1;
                i2++;
            }
        }
        if (count < k) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
};