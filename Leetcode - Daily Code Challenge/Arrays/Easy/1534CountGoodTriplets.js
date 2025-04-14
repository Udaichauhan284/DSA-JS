/* 1534 Count Good Triplets
14 April 25, Leetcode POTD, Easy
Input: arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3
Output: 4
Explanation: There are 4 good triplets: [(3,0,1), (3,0,1), (3,1,1), (0,1,1)].
*/

/*Simply in this we can run three nested loop
i will go till n-3 and j will go till n-2 and k
will go till n-1, TC: O(n^3), SC: O(1)
*/
var countGoodTriplets = function(arr, a, b, c) {
    let count = 0;
    let len = arr.length;
    for(let i=0; i<=len-3; i++){
        for(let j=i+1; j<=len-2; j++){
            for(let k=j+1; k<=len-1; k++){
                if(Math.abs(arr[i] - arr[j]) <= a && Math.abs(arr[j]-arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c){
                    count++;
                }
            }
        }
    }
    return count;
};


/*Simply in this we can run three nested loop
i will go till n-3 and j will go till n-2 and k
will go till n-1, TC: O(n^3), SC: O(1)
Minor change we run k loop when we check the first condition
*/
var countGoodTriplets = function (arr, a, b, c) {
    let count = 0;
    let len = arr.length;
    for (let i = 0; i <= len - 3; i++) {
        for (let j = i + 1; j <= len - 2; j++) {
            if (Math.abs(arr[i] - arr[j]) <= a) {
                for (let k = j + 1; k <= len - 1; k++) {
                    if (Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c) {
                        count++;
                    }
                }
            }

        }
    }
    return count;
};