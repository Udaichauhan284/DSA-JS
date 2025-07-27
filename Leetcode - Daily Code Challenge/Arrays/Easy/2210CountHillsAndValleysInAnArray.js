/*2210. Count Hills And Valleys In An Array
27 July 2025, Leetcode POTD, EASY
Input: nums = [2,4,1,1,6,5]
Output: 3
Explanation:
At index 0: There is no non-equal neighbor of 2 on the left, so index 0 is neither a hill nor a valley.
At index 1: The closest non-equal neighbors of 4 are 2 and 1. Since 4 > 2 and 4 > 1, index 1 is a hill. 
At index 2: The closest non-equal neighbors of 1 are 4 and 6. Since 1 < 4 and 1 < 6, index 2 is a valley.
At index 3: The closest non-equal neighbors of 1 are 4 and 6. Since 1 < 4 and 1 < 6, index 3 is a valley, but note that it is part of the same valley as index 2.
At index 4: The closest non-equal neighbors of 6 are 1 and 5. Since 6 > 1 and 6 > 5, index 4 is a hill.
At index 5: There is no non-equal neighbor of 5 on the right, so index 5 is neither a hill nor a valley. 
There are 3 hills and valleys so we return 3.
*/

/*In this we need to count the peak and valleys
so for this we will take two pointer, i and j
i=0, j=1, and j will be moving, and it will check
i less then j and j is greater then j+1 means 
it is peak, and for valley, if you have on right 
side same as j, move j and i, and check if i is 
greater then j and j is small then j+1 means
valley count++
TC: O(n), SC: O(1)
*/
var countHillValley = function(nums) {
    let len = nums.length;
    let i=0, j=1;
    let count=0;
    while(j+1 < len){
        if((nums[i] < nums[j] && nums[j] > nums[j+1])
        || (nums[i] > nums[j] && nums[j] < nums[j+1])
        ){
            count++;
            i=j; //move i 
        }
        j++;
    }
    return count;
};