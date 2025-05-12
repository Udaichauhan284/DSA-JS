/* 2094. Finding 3-Digit Even Numbers
Input: digits = [2,1,3,0]
Output: [102,120,130,132,210,230,302,310,312,320]
Explanation: All the possible integers that follow the requirements are in the output array. 
Notice that there are no odd integers or integers with leading zeros.
*/

/*In method 1,I can use the 3 nested loop and in that 
i can form the num and set into the set, if that is even
i am using set because we dont want to repeat the nums
then we transfer set nums to array and sort it and 
return it.
TC: O(n^3 + slogs), SC: O(S)
*/
var findEvenNumbers = function(digits) {
    let len = digits.length;
    let set = new Set();
    //now traverse over the digits
    for(let i=0; i<len; i++){
        for(let j=0; j<len; j++){
            for(let k=0; k<len; k++){
                //now check the index are not same
                if(i === j || j === k || i === k){
                    continue;
                }
                //form the num
                let num = (digits[i]*100)+(digits[j]*10)+(digits[k]*1);
                //now check the nums if that is even or not
                if(num >= 100 && num%2 === 0){
                    set.add(num);
                }
            }
        }
    }

    let result = Array.from(set); 

    result.sort((a,b) => a-b);
    return result;
};


/*We need to form the 3 digit so in first we need to run the loop from 1 to 9
and in second need to run the loop from 0 to 9 and in last for getting the even
need to run the loop from 0 to 8, i+2, and also we will take the map, and use
the map value and outer increase the map value
TC: O(1), SC: O(n)
*/
var findEvenNumbers = function(digits) {
    const result = [];
    const freq = new Array(10).fill(0);

    // Count frequency of each digit
    for (let digit of digits) {
        freq[digit]++;
    }

    // Generate all valid 3-digit even numbers
    for (let i = 1; i <= 9; i++) {
        if (freq[i] === 0) continue;
        freq[i]--;

        for (let j = 0; j <= 9; j++) {
            if (freq[j] === 0) continue;
            freq[j]--;

            for (let k = 0; k <= 8; k += 2) { // k must be even
                if (freq[k] === 0) continue;
                freq[k]--;

                const num = i * 100 + j * 10 + k;
                result.push(num);

                freq[k]++;
            }

            freq[j]++;
        }

        freq[i]++;
    }

    return result;
};
