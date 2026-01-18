/* Question From GeeksForGeeks
Given an array arr consisting of only 0's and 1's in random order. Modify the array in-place to segregate 0s onto the left side and 1s onto the right side of the array.

Examples :

Input: arr[] = [0, 0, 1, 1, 0]
Output: [0, 0, 0, 1, 1]
Explanation:  After segregation, all the 0's are on the left and 1's are on the right. Modified array will be [0, 0, 0, 1, 1].
*/

function segregate0and1(arr) {
    // code here
    let len = arr.length;
    let left = 0;
    let right = len - 1;
    while (left < right) {
        while (left < right && arr[left] === 0) {
        left++;
        }
        while (left < right && arr[right] === 1) {
        right--;
        }

        if (left < right) {
        //do the swapping of 0 and 1
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
        }
    }
    return arr;
}
