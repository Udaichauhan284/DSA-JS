/* Longest INcreasing Subsequence
using Binary Search.

*/

//TC: O(nlogn), SC: O(n)
class Solution 
{
    //Function to find length of longest increasing subsequence.
    longestSubsequence(n, a)
    {
        // code here
        let temp = [];
        temp.push(a[0]);
        let len = 1;
        for(let i=1; i<n; i++){
            if(a[i] > temp[temp.length-1]){
                temp.push(a[i]);
                len++;
            }else{
                let ind = temp.findIndex((el) => el >= a[i]);
                temp[ind] = a[i];
            }
        }
        return len;
    }
}



//TC: O(nlogn), SC: O(n)
//using lower bound method
class Solution 
{
    //Function to find length of longest increasing subsequence.
    longestSubsequence(n, a)
    {
        // code here
        let temp = [];
        temp.push(a[0]);
        let len = 1;
        for(let i=1; i<n; i++){
            if(a[i] > temp[temp.length-1]){
                temp.push(a[i]);
                len++;
            }else{
                // let ind = temp.findIndex((el) => el >= a[i]);
                let ind = this.lowerBound(temp, a[i]);
                temp[ind] = a[i];
            }
        }
        return len;
    }
    lowerBound(arr,target){
        let len = arr.length;
        let low = 0;
        let high = len-1;
        let ans = len;
        while(low <= high){
            let mid = low + Math.floor((high-low)/2);
            if(arr[mid] >= target){
                ans = mid;
                high = mid-1;
            }else{
                low = mid+1;
            }
        }
        return ans;
    }
}