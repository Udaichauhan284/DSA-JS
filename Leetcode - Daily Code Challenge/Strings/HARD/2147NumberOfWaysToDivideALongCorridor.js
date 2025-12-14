const MOD = 1e9 + 7;

var numberOfWays = function(corridor) {
    const posSeats = [];

    // Collect positions of all seats
    for (let i = 0; i < corridor.length; i++) {
        if (corridor[i] === 'S') {
            posSeats.push(i);
        }
    }

    // If seats are odd or zero, no valid ways
    if (posSeats.length === 0 || posSeats.length % 2 !== 0) {
        return 0;
    }

    let result = 1;
    let prev = posSeats[1]; // end index of first pair of seats

    // Process each next pair
    for (let i = 2; i < posSeats.length; i += 2) {
        const length = posSeats[i] - prev;
        result = (result * length) % MOD;

        prev = posSeats[i + 1];
    }

    return result;
};
