/* 3408. Design Task Manager 
18 sept 2025, leetcode potd
Input:
["TaskManager", "add", "edit", "execTop", "rmv", "add", "execTop"]
[[[[1, 101, 10], [2, 102, 20], [3, 103, 15]]], [4, 104, 5], [102, 8], [], [101], [5, 105, 15], []]

Output:
[null, null, null, 3, null, null, 5]

Explanation

TaskManager taskManager = new TaskManager([[1, 101, 10], [2, 102, 20], [3, 103, 15]]); // Initializes with three tasks for Users 1, 2, and 3.
taskManager.add(4, 104, 5); // Adds task 104 with priority 5 for User 4.
taskManager.edit(102, 8); // Updates priority of task 102 to 8.
taskManager.execTop(); // return 3. Executes task 103 for User 3.
taskManager.rmv(101); // Removes task 101 from the system.
taskManager.add(5, 105, 15); // Adds task 105 with priority 15 for User 5.
taskManager.execTop(); // return 5. Executes task 105 for User 5.
*/

class MyMaxHeap {   // <---- renamed
    constructor() {
        this.data = [];
    }
   _compare(a, b) {
    if (a[0] === b[0]) return a[1] > b[1];
    return a[0] > b[0];
}

    push(item) {
        this.data.push(item);
        this._heapifyUp(this.data.length - 1);
    }
    pop() {
        if (this.size() === 0) return null;
        const top = this.data[0];
        const last = this.data.pop();
        if (this.size() > 0) {
            this.data[0] = last;
            this._heapifyDown(0);
        }
        return top;
    }
    peek() {
        return this.size() > 0 ? this.data[0] : null;
    }
    size() {
        return this.data.length;
    }
    _heapifyUp(index) {
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);
            if (this._compare(this.data[index], this.data[parent])) {
                [this.data[index], this.data[parent]] = [this.data[parent], this.data[index]];
                index = parent;
            } else break;
        }
    }
    _heapifyDown(index) {
        const n = this.data.length;
        while (true) {
            let largest = index;
            const left = 2 * index + 1;
            const right = 2 * index + 2;
            if (left < n && this._compare(this.data[left], this.data[largest])) {
                largest = left;
            }
            if (right < n && this._compare(this.data[right], this.data[largest])) {
                largest = right;
            }
            if (largest !== index) {
                [this.data[index], this.data[largest]] = [this.data[largest], this.data[index]];
                index = largest;
            } else break;
        }
    }
}

class TaskManager {
    constructor(initialTasks) {
        this.maxHeap = new MyMaxHeap(); // <--- use renamed class
        this.taskPriorityMap = new Map();
        this.taskOwnerMap = new Map();

        for (const [userId, taskId, priority] of initialTasks) {
            this.add(userId, taskId, priority);
        }
    }

    add(userId, taskId, priority) {
        this.maxHeap.push([priority, taskId]);
        this.taskPriorityMap.set(taskId, priority);
        this.taskOwnerMap.set(taskId, userId);
    }

    edit(taskId, newPriority) {
        this.maxHeap.push([newPriority, taskId]);
        this.taskPriorityMap.set(taskId, newPriority);
    }

    rmv(taskId) {
        this.taskPriorityMap.set(taskId, -1);
    }

    execTop() {
        while (this.maxHeap.size() > 0) {
            const [priority, taskId] = this.maxHeap.pop();
            if (priority === this.taskPriorityMap.get(taskId)) {
                this.taskPriorityMap.set(taskId, -1);
                return this.taskOwnerMap.get(taskId);
            }
        }
        return -1;
    }
}
