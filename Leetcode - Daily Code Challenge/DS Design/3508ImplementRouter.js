/* 3508. Implement Router
20 sept 2025, leetcode potd
Input:
["Router", "addPacket", "addPacket", "addPacket", "addPacket", "addPacket", "forwardPacket", "addPacket", "getCount"]
[[3], [1, 4, 90], [2, 5, 90], [1, 4, 90], [3, 5, 95], [4, 5, 105], [], [5, 2, 110], [5, 100, 110]]

Output:
[null, true, true, false, true, true, [2, 5, 90], true, 1]

Explanation

Router router = new Router(3); // Initialize Router with memoryLimit of 3.
router.addPacket(1, 4, 90); // Packet is added. Return True.
router.addPacket(2, 5, 90); // Packet is added. Return True.
router.addPacket(1, 4, 90); // This is a duplicate packet. Return False.
router.addPacket(3, 5, 95); // Packet is added. Return True
router.addPacket(4, 5, 105); // Packet is added, [1, 4, 90] is removed as number of packets exceeds memoryLimit. Return True.
router.forwardPacket(); // Return [2, 5, 90] and remove it from router.
router.addPacket(5, 2, 110); // Packet is added. Return True.
router.getCount(5, 100, 110); // The only packet with destination 5 and timestamp in the inclusive range [100, 110] is [4, 5, 105]. Return 1.

*/

class Router {
  constructor(memoryLimit) {
    this.MAX_SIZE = memoryLimit;
    this.packetStore = new Map(); // key -> packet [source, dest, timestamp]
    this.destTimestamps = new Map(); // destination -> sorted timestamps
    this.que = []; // FIFO order
  }

  makeKey(source, destination, timestamp) {
    return `${source}#${destination}#${timestamp}`;
  }

  // Binary search insertion to keep timestamps sorted
  insertSorted(arr, val) {
    let left = 0, right = arr.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] < val) left = mid + 1;
      else right = mid;
    }
    arr.splice(left, 0, val); // insert at correct index
  }

  addPacket(source, destination, timestamp) {
    const key = this.makeKey(source, destination, timestamp);

    if (this.packetStore.has(key)) {
      return false; // duplicate
    }

    if (this.packetStore.size >= this.MAX_SIZE) {
      this.forwardPacket(); // remove oldest
    }

    this.packetStore.set(key, [source, destination, timestamp]);
    this.que.push(key);

    if (!this.destTimestamps.has(destination)) {
      this.destTimestamps.set(destination, []);
    }
    this.insertSorted(this.destTimestamps.get(destination), timestamp);

    return true;
  }

  forwardPacket() {
    if (this.packetStore.size === 0) {
      return [];
    }

    const key = this.que.shift();
    const packet = this.packetStore.get(key);

    this.packetStore.delete(key);

    const dest = packet[1];
    const timestamps = this.destTimestamps.get(dest);
    if (timestamps && timestamps.length > 0) {
      // remove earliest timestamp (which is always at index 0)
      timestamps.shift();
      if (timestamps.length === 0) {
        this.destTimestamps.delete(dest);
      }
    }

    return packet;
  }

  getCount(destination, startTime, endTime) {
    if (!this.destTimestamps.has(destination)) {
      return 0;
    }

    const timestamps = this.destTimestamps.get(destination);

    // Binary search lower bound
    const lowerBound = (arr, target) => {
      let left = 0, right = arr.length;
      while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] < target) left = mid + 1;
        else right = mid;
      }
      return left;
    };

    // Binary search upper bound
    const upperBound = (arr, target) => {
      let left = 0, right = arr.length;
      while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] <= target) left = mid + 1;
        else right = mid;
      }
      return left;
    };

    const i = lowerBound(timestamps, startTime);
    const j = upperBound(timestamps, endTime);

    return j - i;
  }
}
