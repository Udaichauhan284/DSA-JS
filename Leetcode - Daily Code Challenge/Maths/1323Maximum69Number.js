/*1323.Maximum 69 Number
16 Aug 2025, Leetcode POTD EASY
Input: num = 9669
Output: 9969
Explanation: 
Changing the first digit results in 6669.
Changing the second digit results in 9969.
Changing the third digit results in 9699.
Changing the fourth digit results in 9666.
The maximum number is 9969.
*/

//TC: O(n), SC: O(n) as we are taking the str arr
var maximum69Number  = function(num) {
    let str = num.toString().split('');
    //TC: O(d), SC: O(d)
    for(let i=0; i<str.length; i++){ //TC: O(n)
        if(str[i] === '6'){
            str[i] = '9';
            break;
        }
    }
    return Number(str.join('')); 
};


/*Method 2, without use of js inbuilt function 
to change to str and all
find out the rightmost 6 pos index value and 
then add in num with 3 * 10^pos, this will change
the num to 6 to 9.
TC: O(n), SC: O(1)
*/
var maximum69Number  = function(num) {
    let index = 0;
    let pos = -1;
    let temp = num;
    while(temp > 0){
        let digit = temp % 10;
        if(digit === 6){
            pos = index; //give the rightmost 6
        }
        temp = Math.floor(temp/10);
        index++; //decrease the temp and increase the index;
    }

    if(pos !== -1){
        num += 3 * Math.pow(10, pos);
    }
    return num;
};