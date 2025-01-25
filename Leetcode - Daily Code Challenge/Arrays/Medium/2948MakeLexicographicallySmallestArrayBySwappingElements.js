/* 2984. Make Lexicographically Smallest Array By Swapping Elements
25 Jan 25, Leetcode POTD, Array

Input: nums = [1,5,3,9,8], limit = 2
Output: [1,3,5,8,9]
Explanation: Apply the operation 2 times:
- Swap nums[1] with nums[2]. The array becomes [1,3,5,9,8]
- Swap nums[3] with nums[4]. The array becomes [1,3,5,8,9]
We cannot obtain a lexicographically smaller array by applying any more operations.
Note that it may be possible to get the same result by doing different operations.
*/


/*In Brute method, we will look for smallValue and idx
for currIdx, and we keep on looking, till we find the samll
one which is in limit and small then curr one.
TC: O(n^2) still more than n^2, because we are looking for
one index continously, SC: O(1)
*/
var lexicographicallySmallestArray = function(nums, limit) {
    let len = nums.length;
    //now iterate over the nums
    for(let i=0; i<len; i++){

        //now find the smallValue for currIndex
        while(true){
            let smallValue = nums[i];
            let idx = -1;
            for(let j=i+1; j<len; j++){
                //now check the differen in limit
                if(Math.abs(nums[i] - nums[j]) <= limit){
                    if(nums[j] < smallValue){
                        smallValue = nums[j];
                        idx = j;
                    }
                }
            }

            //if we find the idx, we need to swap the currIdx
            //value with idx value
            if(idx !== -1){
                [nums[i], nums[idx]] = [nums[idx], nums[i]];
            }else{
                break; //break the while loop if we not able
                //to find
            }
        }
    }
    return nums;
};



/*In Optimal Method, we first sort the nums, and then form the group,
in which we push the nums which have comes in limit, otherwise push them into
other group
T.C : ~O(n*logn)
S.C : ~O(n)
*/
var lexicographicallySmallestArray = function (nums, limit) {
    let len = nums.length;
    let arr = [...nums];
    arr.sort((a, b) => a - b);

    let groupNum = 0;
    let numToGroup = new Map();
    numToGroup.set(arr[0], groupNum);

    let groupToList = new Map();
    if (!groupToList.has(groupNum)) {
        groupToList.set(groupNum, []);
    }
    groupToList.get(groupNum).push(arr[0]);

    for (let i = 1; i < len; i++) {
        if (Math.abs(arr[i] - arr[i - 1]) > limit) {
            groupNum++;
        }
        numToGroup.set(arr[i], groupNum);
        if (!groupToList.has(groupNum)) {
            groupToList.set(groupNum, []);
        }
        groupToList.get(groupNum).push(arr[i]);
    }

    const result = Array(len);
    for (let i = 0; i < len; i++) {
        const num = nums[i];
        const group = numToGroup.get(num);

        // Get the smallest available number in this group
        result[i] = groupToList.get(group).shift(); // Remove the used element
    }

    return result;
};