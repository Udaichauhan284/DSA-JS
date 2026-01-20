/* Triplets With Smaller Sum
21 Jan 2026, GeeksForGeeks
Input: n = 4, sum = 2, arr[] = {-2, 0, 1, 3}
Output:  2
Explanation: Below are triplets with sum less than 2 (-2, 0, 1) and (-2, 0, 3). 
*/

countTriplets(arr, n, sum) {
        // code here
        let count = 0;
        arr.sort((a,b) => a-b); //need to sort, so that i can apply 2 pointer
        for(let i=0; i<=n-3; i++){
            let left = i+1;
            let right = n-1;
            
            while(left < right){
                let currSum = arr[i]+arr[left]+arr[right];
                if(currSum < sum){
                    count += right-left; //if currSum is less, so if we do right-- still we get the less sum, thats why right-left
                    left++;
                }else{
                    right--;
                }
            }
        }
        return count;
    }