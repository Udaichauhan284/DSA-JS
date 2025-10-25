/* 1716. Calculate Money In Leetcode Bank
25 Oct 2025, leetcode potd, easy
Input: n = 4
Output: 10
Explanation: After the 4th day, the total is 1 + 2 + 3 + 4 = 10.
*/


function totalMoney(n) {
    let result = 0;
    let mondayMoney = 1;

    while (n > 0) {
        let money = mondayMoney;
        const days = Math.min(n, 7);

        for (let day = 1; day <= days; day++) {
        result += money;
        money++;
        }

        n -= 7;
        mondayMoney++;
    }

    return result;
}