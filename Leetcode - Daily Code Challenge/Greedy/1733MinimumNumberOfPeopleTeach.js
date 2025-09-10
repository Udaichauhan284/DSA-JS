/* 1733. Minimum Number of People to Teach
10 Sept 2025, leetcode potd, medium
Input: n = 2, languages = [[1],[2],[1,2]], friendships = [[1,2],[1,3],[2,3]]
Output: 1
Explanation: You can either teach user 1 the second language or user 2 the first language.
*/

function minimumTeachings(n, languages, friendships) {
    const sadUsers = new Set();

    // Step 1: Find users who cannot communicate
    for (let [u, v] of friendships) {
        u -= 1; // convert to 0-based indexing
        v -= 1;

        const langSet = new Set(languages[u]);
        let canTalk = false;

        for (let lang of languages[v]) {
            if (langSet.has(lang)) {
                canTalk = true;
                break;
            }
        }

        if (!canTalk) {
            sadUsers.add(u);
            sadUsers.add(v);
        }
    }

    // Step 2: Count frequency of each language among sad users
    const language = new Array(n + 1).fill(0);
    let mostKnownLang = 0;

    for (let user of sadUsers) {
        for (let lang of languages[user]) {
            language[lang]++;
            mostKnownLang = Math.max(mostKnownLang, language[lang]);
        }
    }

    // Step 3: Result = total sad users - max language coverage
    return sadUsers.size - mostKnownLang;
}
