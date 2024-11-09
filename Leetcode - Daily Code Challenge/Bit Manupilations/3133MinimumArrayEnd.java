/* 3133 Minimum Array End
this i have solved by using the JAVA
09 Nov 2024, Leetcode POTD, Bit Manupilation,

Input: n = 3, x = 4

Output: 6

Explanation:

nums can be [4,5,6] and its last element is 6.
*/
/*In this we need to find the number which is AND with prev
one and give same as x. so basically we start from x
and find the next num in range of n. for that if we want 
num which will give x on doing AND with prev num, we take 
same num, but we cant take that, so take +1 and do OR with 
prev num which is x only, and we will find the num.
TC: O(n), SC: O(1)
*/
class Solution {
    public long minEnd(int n, int x) {
        long num = x;
        for(int i=1; i<n; i++){
            num = num+1 | x;
        }
        return num;
    }
}