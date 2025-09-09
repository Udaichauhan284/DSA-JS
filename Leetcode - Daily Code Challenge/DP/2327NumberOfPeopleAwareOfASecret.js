/* 2327. Number of People Aware of a Secret
09 Sept 2025, leetcode POTD, medium
Input: n = 6, delay = 2, forget = 4
Output: 5
Explanation:
Day 1: Suppose the first person is named A. (1 person)
Day 2: A is the only person who knows the secret. (1 person)
Day 3: A shares the secret with a new person, B. (2 people)
Day 4: A shares the secret with a new person, C. (3 people)
Day 5: A forgets the secret, and B shares the secret with a new person, D. (3 people)
Day 6: B shares the secret with E, and C shares the secret with F. (5 people)

*/

function peopleAwareOfSecret(n, delay, forget) {
    const MOD = 1000000007;
    const t = new Array(n + 1).fill(-1);

    function solve(day) {
        if (day === 1) return 1;
        if (day <= 0) return 0;

        if (t[day] !== -1) return t[day];

        let result = 0;
        // people who can share today are those who learned it in
        // [day - forget + 1, day - delay]
        for (let prev = day - forget + 1; prev <= day - delay; prev++) {
            if (prev > 0) {
                result = (result + solve(prev)) % MOD;
            }
        }

        t[day] = result;
        return result;
    }

    let total = 0;
    // only count people who haven't forgotten by day n
    for (let day = n - forget + 1; day <= n; day++) {
        if (day > 0) {
            total = (total + solve(day)) % MOD;
        }
    }

    return total;
}