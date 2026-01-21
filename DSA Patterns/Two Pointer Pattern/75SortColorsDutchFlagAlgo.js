var sortColors = function(nums) {
    let len = nums.length;
    let low=0, mid=0, high=len-1;
    //In dutch flag algo, we are assuming that start to
    //low-1, all fill with 0 and high to end fill with
    //1, so only problem area is mid to high
    while(mid <= high){
        if(nums[mid] === 1){
            //increase the mid 
            mid++;
        }else if(nums[mid] === 0){
            //zero need to go at first place, where mid is
            [nums[mid], nums[low]] = [nums[low], nums[mid]];
            low++;
            mid++;
        }else{
            //swap with mid and high, we get the 2
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
    return nums;
};