/* 2402. Meeting Rooms III
11 July 2025, Leetcode POTD, HARD
Input: n = 2, meetings = [[0,10],[1,5],[2,7],[3,4]]
Output: 0
Explanation:
- At time 0, both rooms are not being used. The first meeting starts in room 0.
- At time 1, only room 1 is not being used. The second meeting starts in room 1.
- At time 2, both rooms are being used. The third meeting is delayed.
- At time 3, both rooms are being used. The fourth meeting is delayed.
- At time 5, the meeting in room 1 finishes. The third meeting starts in room 1 for the time period [5,10).
- At time 10, the meetings in both rooms finish. The fourth meeting starts in room 0 for the time period [10,11).
Both rooms 0 and 1 held 2 meetings, so we return 0. 
*/

class MinHeap {
    constructor(compare) {
        this.data = [];
        this.compare = compare;
    }

    push(val) {
        this.data.push(val);
        this._heapifyUp();
    }

    pop() {
        if (this.size() === 0) return null;
        const top = this.data[0];
        const last = this.data.pop();
        if (this.size() > 0) {
            this.data[0] = last;
            this._heapifyDown();
        }
        return top;
    }

    peek() {
        return this.data[0];
    }

    size() {
        return this.data.length;
    }

    _heapifyUp() {
        let idx = this.data.length - 1;
        const element = this.data[idx];
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            if (this.compare(element, this.data[parentIdx]) >= 0) break;
            this.data[idx] = this.data[parentIdx];
            idx = parentIdx;
        }
        this.data[idx] = element;
    }

    _heapifyDown() {
        const length = this.data.length;
        let idx = 0;
        const element = this.data[0];

        while (true) {
            let left = 2 * idx + 1;
            let right = 2 * idx + 2;
            let smallest = idx;

            if (left < length && this.compare(this.data[left], this.data[smallest]) < 0) {
                smallest = left;
            }

            if (right < length && this.compare(this.data[right], this.data[smallest]) < 0) {
                smallest = right;
            }

            if (smallest === idx) break;

            // Swap the elements
            this.data[idx] = this.data[smallest];
            this.data[smallest] = element; // This line was missing!
            idx = smallest;
        }

        this.data[idx] = element;
    }
}

function mostBooked(n, meetings) {
    const meetingCount = Array(n).fill(0);

    const usedRooms = new MinHeap((a, b) => {
        // Compare by end time first, then by room number
        if (a[0] === b[0]) return a[1] - b[1];
        return a[0] - b[0];
    });

    const unusedRooms = new MinHeap((a, b) => a - b);
    for (let i = 0; i < n; i++) {
        unusedRooms.push(i);
    }

    meetings.sort((a, b) => a[0] - b[0]);

    for (let [start, end] of meetings) {
        // Free up rooms whose meetings have ended
        while (usedRooms.size() > 0 && usedRooms.peek()[0] <= start) {
            const [_, room] = usedRooms.pop();
            unusedRooms.push(room);
        }

        if (unusedRooms.size() > 0) {
            const room = unusedRooms.pop();
            usedRooms.push([end, room]);
            meetingCount[room]++;
        } else {
            const [roomAvailabilityTime, room] = usedRooms.pop();
            const newEnd = roomAvailabilityTime + (end - start);
            usedRooms.push([newEnd, room]);
            meetingCount[room]++;
        }
    }

    let maxMeetings = 0;
    let resultRoom = 0;
    for (let i = 0; i < n; i++) {
        if (meetingCount[i] > maxMeetings) {
            maxMeetings = meetingCount[i];
            resultRoom = i;
        }
    }

    return resultRoom;
}