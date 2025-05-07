/* 3341. Find Minimum Time to Reach Last Room I

Input: moveTime = [[0,4],[4,4]]

Output: 6

Explanation:

The minimum time required is 6 seconds.

At time t == 4, move from room (0, 0) to room (1, 0) in one second.
At time t == 5, move from room (1, 0) to room (1, 1) in one second.
*/

/*In this we need to find the shortest time to reach
last m-1n-1, so in this we can use the Dijkstra Algo
TC: O(mnlogmn), SC: O(mn)
*/
var direction = [[1, 0], [0, 1], [-1, 0], [0, -1]];
var minTimeToReach = function (moveTime) {
    let m = moveTime.length;
    let n = moveTime[0].length;
    let result = Array.from({ length: m }, () => Array(n).fill(Infinity));

    //now initialize this
    let pq = new MinHeap();
    result[0][0] = 0;
    pq.push([0,[0,0]]); //time, [i,j]

    while(!pq.isEmpty()){
        let [currTime, [i,j]] = pq.poll();
        if(i===m-1 && j===n-1){
            return currTime;
        }

        //move into direction
        for(let [dx,dy] of direction){
            let newRow = i+dx;
            let newCol = j+dy;
            if(newRow >= 0 && newRow < m && newCol >= 0 && newCol < n){
                let waitTime = Math.max(moveTime[newRow][newCol] - currTime, 0);
                let moveT = currTime+waitTime+1;
                if(result[newRow][newCol] > moveT){
                    //if result one is bigger, we need small one
                    //change it
                    result[newRow][newCol] = moveT;
                    pq.push([moveT, [newRow,newCol]]);
                }
            }
        }
    }
    return result;
};

class MinHeap {
    constructor() {
        this.data = [];
    }
    getParentIndex(idx) {
        return Math.floor((idx - 1) / 2);
    }
    getLeftChildIndex(idx) {
        return idx * 2 + 1;
    }
    getRightChildIndex(idx) {
        return idx * 2 + 2;
    }
    swap(i1, i2) {
        [this.data[i1], this.data[i2]] = [this.data[i2], this.data[i1]];
    }
    push(pair) {
        this.data.push(pair);
        this.heapifyUp();
    }
    heapifyUp() {
        let idx = this.data.length - 1;
        while (idx > 0) {
            let parent = this.getParentIndex(idx);
            if (this.data[idx][0] < this.data[parent][0]) {
                this.swap(idx, parent);
                idx = parent;
            } else {
                break;
            }
        }
    }
    poll() {
        if (this.data.length === 0) return null;
        if (this.data.length === 1) return this.data.pop();
        let minValue = this.data[0];
        this.data[0] = this.data.pop();
        this.heapifyDown(0);
        return minValue;
    }
    heapifyDown(idx) {
        while (true) {
            let smallest = idx;
            let left = this.getLeftChildIndex(idx);
            let right = this.getRightChildIndex(idx);

            if (left < this.data.length && this.data[left][0] < this.data[smallest][0]) {
                smallest = left;
            }

            if (right < this.data.length && this.data[right][0] < this.data[smallest][0]) {
                smallest = right;
            }

            if (smallest !== idx) {
                this.swap(idx, smallest);
                idx = smallest;
            } else {
                break;
            }
        }
    }
    isEmpty() {
        return this.data.length === 0;
    }
}