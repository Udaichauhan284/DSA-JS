function findAllPeople(n, meetings, firstPerson) {
    // Map<time, Array<[p1, p2]>>
    const timeMeetings = new Map();

    for (const [p1, p2, time] of meetings) {
        if (!timeMeetings.has(time)) {
            timeMeetings.set(time, []);
        }
        timeMeetings.get(time).push([p1, p2]);
    }

    // Sort times (equivalent to C++ map ordered keys)
    const times = Array.from(timeMeetings.keys()).sort((a, b) => a - b);

    const knowsSecret = new Array(n).fill(false);
    knowsSecret[0] = true;
    knowsSecret[firstPerson] = true;

    // Process meetings in increasing time
    for (const time of times) {
        const meets = timeMeetings.get(time);

        // Build adjacency list
        const adj = new Map();
        const queue = [];
        const alreadyAdded = new Set();

        for (const [p1, p2] of meets) {
            if (!adj.has(p1)) adj.set(p1, []);
            if (!adj.has(p2)) adj.set(p2, []);

            adj.get(p1).push(p2);
            adj.get(p2).push(p1);

            if (knowsSecret[p1] && !alreadyAdded.has(p1)) {
                queue.push(p1);
                alreadyAdded.add(p1);
            }
            if (knowsSecret[p2] && !alreadyAdded.has(p2)) {
                queue.push(p2);
                alreadyAdded.add(p2);
            }
        }

        // BFS to spread the secret at this time
        while (queue.length > 0) {
            const person = queue.shift();

            for (const nextPerson of adj.get(person) || []) {
                if (!knowsSecret[nextPerson]) {
                    knowsSecret[nextPerson] = true;
                    queue.push(nextPerson);
                }
            }
        }
    }

    // Collect result
    const result = [];
    for (let i = 0; i < n; i++) {
        if (knowsSecret[i]) {
            result.push(i);
        }
    }

    return result;
}.  
