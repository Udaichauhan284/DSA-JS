/* 2929. Distribute Candies Among Children II
01 June 25, Leetcode POTD, Medium
Input: n = 5, limit = 2
Output: 3
Explanation: There are 3 ways to distribute 5 candies such that no child gets more than 2 candies: (1, 2, 2), (2, 1, 2) and (2, 2, 1).
*/


/*Using Recursion, in this we can use the solve
function in which we maintain the childCount
TC: O(3^n)
*/
var distributeCandies = function(n, limit) {
    return solve(0,n,limit);
};
function solve(childCount, n, limit){
    //base case
    if(childCount === 3){
        if(n === 0){
            return 1; //means when the child
            //count is 3 and candies is 0
            //we got the one way
        }
        return 0;
    }

    //now try assigning the candies
    let ways = 0;
    for(let assign=0; assign<=Math.min(n,limit); assign++){
        //here we going till the min of n and limit
        ways += solve(childCount+1, (n-assign), limit);
    }
    return ways;
}


/*there are 3 children, we can iterate over these children and till
for first one min(n,limit) for second one till min(n-ch1, limit), for third
one min(n-ch1-ch2, limit)
TC: O(minValue^3), SC: (1)
*/
var distributeCandies = function(n, limit) {
    let ways = 0;
    for(let ch1=0; ch1<=Math.min(n,limit); ch1++){
        for(let ch2=0; ch2<=Math.min(n-ch1, limit); ch2++){
            for(let ch3=0; ch3<=Math.min(n-ch1-ch2, limit); ch3++){
                if(ch1+ch2+ch3 === n){
                    ways++;
                }
            }
        }
    }
    return ways;
};


/*In this after two loops we know to third one, we can define only
n-ch1-ch2 TC: O(minValue^2), SC: O(1)
*/
var distributeCandies = function(n, limit) {
    let ways = 0;
    for(let ch1=0; ch1<=Math.min(n,limit); ch1++){
        for(let ch2=0; ch2<=Math.min(n-ch1, limit); ch2++){
            let ch3 = (n-ch1-ch2);
            if(ch3 >= 0 && ch3 <= limit){
                ways++;
            }
        }
    }
    return ways;
};

//Optimal Way O(n), SC: O(1)
var distributeCandies = function(n, limit) {
    let ways = 0;
    let minCh1 = Math.max(0, n-2*limit);
    let maxCh1 = Math.min(n, limit);

    for(let i=minCh1; i<=maxCh1; i++){
        let N = n-i;
        let minCh2 = Math.max(0, N-limit);
        let maxCh2 = Math.min(N, limit);

        ways += maxCh2 - minCh2 + 1;
    }
    return ways;
};