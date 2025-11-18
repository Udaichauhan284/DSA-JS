var isOneBitCharacter = function(bits) {
    let n = bits.length;
    let i = 0;

    while (i < n - 1) {
        // If current bit is 1 → jump 2 steps (two-bit character)
        // If current bit is 0 → jump 1 step (one-bit character)
        i += (bits[i] === 1) ? 2 : 1;
    }

    // If we stop exactly at the last index → last character is one-bit
    return i === n - 1;
};