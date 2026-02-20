var makeLargestSpecial = function(s) {
    let specials = [];
    let count = 0;
    let start = 0;

    for (let i = 0; i < s.length; i++) {
        count += (s[i] === '1') ? 1 : -1;

        // Found a balanced special substring
        if (count === 0) {
            let inner = s.substring(start + 1, i);

            // Recursively process inner part
            let processed = "1" + makeLargestSpecial(inner) + "0";

            specials.push(processed);
            start = i + 1;
        }
    }

    // Sort descending lexicographically
    specials.sort().reverse();

    // Join all together
    return specials.join('');
};
