/*1900. The Earliest and Latest Rounds Where Players Compete
12 July 2025, Leetcode POTD, HARD
Input: n = 11, firstPlayer = 2, secondPlayer = 4
Output: [3,4]
Explanation:
One possible scenario which leads to the earliest round number:
First round: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
Second round: 2, 3, 4, 5, 6, 11
Third round: 2, 3, 4
One possible scenario which leads to the latest round number:
First round: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
Second round: 1, 2, 3, 4, 5, 6
Third round: 1, 2, 4
Fourth round: 2, 4
*/


function earliestAndLatest(n, firstPlayer, secondPlayer) {
    let left = firstPlayer;
    let right = secondPlayer;

    if (left === n - right + 1) {
        return [1, 1];
    }

    // Normalize positions (always left < right and symmetric)
    if (left > n - right + 1) {
        let temp = n - left + 1;
        left = n - right + 1;
        right = temp;
    }

    let minRound = n;
    let maxRound = 1;
    const nextRoundPlayersCount = Math.floor((n + 1) / 2);

    if (right <= nextRoundPlayersCount) {
        // Case 1: both on the same side
        const countLeft = left - 1;
        const midCount = right - left - 1;

        for (let survivorsLeft = 0; survivorsLeft <= countLeft; survivorsLeft++) {
            for (let survivorsMid = 0; survivorsMid <= midCount; survivorsMid++) {
                const pos1 = survivorsLeft + 1;
                const pos2 = pos1 + survivorsMid + 1;

                const [earliest, latest] = earliestAndLatest(nextRoundPlayersCount, pos1, pos2);
                minRound = Math.min(minRound, earliest + 1);
                maxRound = Math.max(maxRound, latest + 1);
            }
        }
    } else {
        // Case 2: players on opposite sides
        const fightsRight = n - right + 1;
        const countLeft = left - 1;
        const midCount = fightsRight - left - 1;
        const remainMidCount = right - fightsRight - 1;

        for (let survivorsLeft = 0; survivorsLeft <= countLeft; survivorsLeft++) {
            for (let survivorsMid = 0; survivorsMid <= midCount; survivorsMid++) {
                const pos1 = survivorsLeft + 1;
                const pos2 = pos1 + survivorsMid + Math.floor((remainMidCount + 1) / 2) + 1;

                const [earliest, latest] = earliestAndLatest(nextRoundPlayersCount, pos1, pos2);
                minRound = Math.min(minRound, earliest + 1);
                maxRound = Math.max(maxRound, latest + 1);
            }
        }
    }

    return [minRound, maxRound];
}