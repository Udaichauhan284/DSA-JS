/* Longest Substring With K Uniques
23 Jan 2026, GeeksForGeeks
Input: s = "aabacbebebe", k = 3
Output: 7
Explanation: The longest substring with exactly 3 distinct characters is "cbebebe", which includes 'c', 'b', and 'e'.
*/

function longestKSubstr(s, k) {
        // code here
        //In this we can implement the sliding window, and we can 
        //use the map, to get the unique k elem compare to size of
        //map
        let len = s.length;
        let low=0, high = 0;
        let freq = new Map();
        let sArr = s.split('');
        let maxLen = -Infinity;
        while(high < len){
            //now first take that elem and add in map
            freq.set(sArr[high], (freq.get(sArr[high]) || 0)+1);
            
            // shrink window if unique chars exceed k
            while(freq.size > k){
                //remove it from map and check if it zero
                freq.set(sArr[low], (freq.get(sArr[low]) || 0)-1);
                if(freq.get(sArr[low]) === 0){
                    freq.delete(sArr[low]);
                }
                low++;
            }
            if(freq.size === k) maxLen = Math.max(maxLen, high-low+1);
            high++;
        }
        return maxLen === (-Infinity) ? -1 : maxLen;
}