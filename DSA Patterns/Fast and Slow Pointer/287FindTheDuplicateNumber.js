const findDuplicate = (nums) => {
    let slow = nums[0];
    let fast = nums[0];

    slow = nums[slow];
    fast = nums[nums[fast]];

    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[nums[fast]];
    }

    slow = nums[0];
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    return fast;
}



//Learning of 3 feb 2026
var findDuplicate2 = function(nums) {
    // nums.sort((a,b) => a-b);
    // let len = nums.length;
    // for(let i=1; i<len-1; i++){
    //     if(nums[i] === nums[i-1]){
    //         return nums[i];
    //     }
    // }

    //Optimal, we can make the linked list of
    //at idx which val point make a link
    //at 0idx there is 1, 0->1, so if you find
    //cycle between two pointer means, there is
    //repeating number;
    let slow = 0;
    let fast = 0;
    while(true){
        //true it will break when there is cycle
        //and we need to find the elem
        //move the pointer 
        slow = nums[slow];
        fast = nums[nums[fast]];
        if(slow === fast){
            //there is cycle, at meeting point
            //slow and fast meet
            slow = 0;
            while(slow !== fast){
                slow = nums[slow];
                fast = nums[fast];
            }
            return slow;
        }
    }
    return -1;
};