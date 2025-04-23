/* 1399. COunt Largest Group
23 April 25, leetcode POTD, easy
Input: n = 13
Output: 4
Explanation: There are 9 groups in total, they are grouped according sum of its digits of numbers from 1 to 13:
[1,10], [2,11], [3,12], [4,13], [5], [6], [7], [8], [9].
There are 4 groups with largest size.
*/

/*In this we can use the map, to store the digitSum
we iterate over the 1ton and find the digitSum and and 
in map, increase the freq of that digitSum, if freq of
that digitSum is equal to maxSize, increase the count
else if freq of digitSum is greaterthen we change to 
maxSize and set count = 1.
TC: O(n * logn), logn is we finding the digitsSum
SC: O(n)
*/
var countLargestGroup = function(n) {
    let maxSize = 0;
    let count = 0; //this to return
    let map = new Map();
    for(let num=1; num<=n; num++){
        let digitSum = findDigitSum(num);
        //increase the freq in map for this sm
        map.set(digitSum, (map.get(digitSum) || 0)+1);

        if(map.get(digitSum) === maxSize){
            //freq of that particular is equal to maxSize
            //increase the count
            count++;
        }else if(map.get(digitSum) > maxSize){
            //need to change the maxSize
            maxSize = map.get(digitSum);
            count = 1; //basic to 1
        }
    }
    return count;
};
const findDigitSum = (num) => {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}