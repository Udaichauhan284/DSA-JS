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



// ====> 19 Nov 2025 <====
class MyMaxHeap{
    constructor(){
        this.data = [];
    }
    //compare function if both priority same, check on taskId
    compare(a, b){
        if(a[0] === b[0]) return a[1] > b[1];
        return a[0] > b[0];
    }
    getParentIndex(idx){
        return Math.floor((idx-1)/2);
    }
    getLeftChildIndex(idx){
        return 2*idx+1
    }
    getRightChildIndex(idx){
        return 2*idx+2;
    }
    swap(i1, i2){
        [this.data[i1], this.data[i2]] = [this.data[i2], this.data[i1]];
    }
    push(pair){
        this.data.push(pair);
        this.heapifyUp();
    }
    heapifyUp(){
        let idx = this.data.length-1;
        while(idx > 0){
            let parentIndex = this.getParentIndex(idx);
            if(this.compare(this.data[idx], this.data[parentIndex])){
                this.swap(idx, parentIndex);
                idx = parentIndex;
            }else{
                break;
            }
        }
    }
    poll(){
        if(this.data.length === 0) return null;
        if(this.data.length === 1) return this.data.pop();
        let maxValue = this.data[0];
        this.data[0] = this.data.pop();
        this.heapifyDown(0);
        return maxValue;
    }
    heapifyDown(idx){
        while(true){
            let largest = idx;
            let left = this.getLeftChildIndex(idx);
            let right = this.getRightChildIndex(idx);
            if(left < this.data.length && this.compare(this.data[left] , this.data[largest])){
                largest = left;
            }
            if(right < this.data.length && this.compare(this.data[right] , this.data[largest])){
                largest = right;
            }
            if(largest !== idx){
                this.swap(idx, largest);
                idx = largest;
            }else{
                break;
            }
        }
    }
    peek(){
        return this.data[0];
    }
    isEmpty(){
        return this.data.length === 0;
    }
}
class TaskManager{
    constructor(tasks){
        this.maxHeap = new MyMaxHeap(); //[priority, taskId]
        this.taskPriorityMap = new Map(); //[taskId, priority]
        this.taskOwnerMap = new Map(); //[taskId, userId]

        //first add initial task
        for(let [userId, taskId, priority] of tasks){
            this.add(userId, taskId, priority);
        }
    }

    add(userId, taskId, priority){
        //now add into the maxHeap
        this.maxHeap.push([priority, taskId]); //O(logn)
        this.taskPriorityMap.set(taskId, priority); //O(1) 
        this.taskOwnerMap.set(taskId, userId); //O(1)
    }
    edit(taskId, newPriority){
        //now add the newPriority into the mapHeap
        this.maxHeap.push([newPriority, taskId]); //O(logn)
        this.taskPriorityMap.set(taskId, newPriority); //O(1)
    }
    rmv(taskId){
        //simply mark the taskId into the taskPriorityMap with -1, means stale it
        this.taskPriorityMap.set(taskId, -1); //O(1)
    }
    execTop(){
        //in this we neep to excute the top priority from maxHeap one
        while(! this.maxHeap.isEmpty()){ //O(nlogn)
            //now first take out the priority, taskId from maxheap
            const [priority, taskId] = this.maxHeap.poll(); //O(logn)
            if(priority === this.taskPriorityMap.get(taskId)){
                //is inside if, means we have fresh one, make it stale, and return
                //user
                this.taskPriorityMap.set(taskId, -1);
                return this.taskOwnerMap.get(taskId);
            }
        }
        return -1;
    }
}
