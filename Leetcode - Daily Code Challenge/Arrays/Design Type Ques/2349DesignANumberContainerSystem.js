/* 2349 Design a Number Container System
08 Feb 25, Leetcode POTD, Array, Design Data Structure

Input
["NumberContainers", "find", "change", "change", "change", "change", "find", "change", "find"]
[[], [10], [2, 10], [1, 10], [3, 10], [5, 10], [10], [1, 20], [10]]
Output
[null, -1, null, null, null, null, 1, null, 2]

Explanation
NumberContainers nc = new NumberContainers();
nc.find(10); // There is no index that is filled with number 10. Therefore, we return -1.
nc.change(2, 10); // Your container at index 2 will be filled with number 10.
nc.change(1, 10); // Your container at index 1 will be filled with number 10.
nc.change(3, 10); // Your container at index 3 will be filled with number 10.
nc.change(5, 10); // Your container at index 5 will be filled with number 10.
nc.find(10); // Number 10 is at the indices 1, 2, 3, and 5. Since the smallest index that is filled with 10 is 1, we return 1.
nc.change(1, 20); // Your container at index 1 will be filled with number 20. Note that index 1 was filled with 10 and then replaced with 20. 
nc.find(10); // Number 10 is at the indices 2, 3, and 5. The smallest index that is filled with 10 is 2. Therefore, we return 2.
*/



class NumberContainers {
    constructor(){
        this.idxToNum = new Map();
        this.numberToIdx = new Map();
    }

    change(index, number){
        this.idxToNum.set(index, number);

        // Ensure numberToIdx has a min-heap for this number
        if(!this.numberToIdx.has(number)){
            this.numberToIdx.set(number, new MinHeap());
        }

        // Push index to heap
        this.numberToIdx.get(number).push(index);
    }

    find(number){
        if(!this.numberToIdx.has(number)){
            return -1;
        }

        let minHeap = this.numberToIdx.get(number);

        while(!minHeap.isEmpty()){
            let idx = minHeap.top(); // Peek the smallest index
            if(this.idxToNum.get(idx) === number){ // Ensure it's still mapped to the same number
                return idx;
            }
            minHeap.poll(); // Remove invalid top index
        }

        return -1;
    }
}

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
        let temp = this.data[i1];
        this.data[i1] = this.data[i2];
        this.data[i2] = temp;
    }

    push(val) {
        this.data.push(val);
        this.heapifyUp();
    }

    heapifyUp() {
        let idx = this.data.length - 1;
        while (idx > 0) {
            let parentIndex = this.getParentIndex(idx);
            if (this.data[idx] < this.data[parentIndex]) {
                this.swap(idx, parentIndex);
                idx = parentIndex;
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

            if (left < this.data.length && this.data[left] < this.data[smallest]) {
                smallest = left;
            }
            if (right < this.data.length && this.data[right] < this.data[smallest]) {
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

    top() {
        return this.data.length ? this.data[0] : null;
    }

    isEmpty() {
        return this.data.length === 0;
    }
}