/* 3315 Construct the minimum bitwsise array II
21 Jan 2026, leetcode potd, meidum

same question as 3314, just constraints are changed
nums[i] <= 10^9
*/

/*In this constraints are high for nums[i] 
in this we can do like this way know nums[i], we
need to go to the x,
so suppose do random selection for example
x = 4 -> 0100, x+1 = 0101, do x | x+1 = 0101
now this is num = 0101, find the first unset bit
which is at bit 1, make j-1 means 0 bit
0101 ^(xor) 0001 => 0100, we able to restore the
x, means we will push this x.
SO over all we know the num, just we need to find
the unset bit and make the j-1 bit unset
TC: O(n*32), SC: O(1)
*/
var minBitwiseArray = function(nums) {
    let len = nums.length;
    let ans = [];
    for(let i=0; i<len; i++){
        if(nums[i] === 2){
            ans.push(-1);
            continue;
        }
        let found = false;
        for(let j=1; j<32; j++){
            //if jth bit is set, skip
            if((nums[i] & (1 << j)) !== 0){
                continue;
            }

            //found an unset bit at position
            //make j-1 bit unset
            ans[i] = nums[i] ^ (1 << (j-1));
            found = true;
            break;
        }
        if(! found){
            ans.push(-1);
        }
    }
    return ans;
};