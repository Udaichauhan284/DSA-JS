/* 3362. Zero Array Transformation III
*/
var maxRemoval = function (nums, queries) {
    queries.sort((a, b) => a[0] - b[0]);
    const heap = new MaxPriorityQueue();
    const deltaArray = new Array(nums.length + 1).fill(0);
    let operations = 0;

    for (let i = 0, j = 0; i < nums.length; i++) {
        operations += deltaArray[i];
        while (j < queries.length && queries[j][0] === i) {
            heap.push(queries[j][1]);
            j++;
        }
        while (operations < nums[i] && !heap.isEmpty() && heap.front() >= i) {
            operations += 1;
            deltaArray[heap.pop() + 1] -= 1;
        }
        if (operations < nums[i]) {
            return -1;
        }
    }
    return heap.size();
};