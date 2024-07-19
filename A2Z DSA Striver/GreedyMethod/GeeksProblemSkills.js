/* Geek's Problem Skills
Geek currently has skills and d days left for placements. He has a array problems of n problems where ith problem is represented as problems[i]=(ratingį, ﻿gain;). ﻿Geek could solve the ith problem only if his currenty skill is not smaller than the rating;. And solving ith problem will increase geek's skill by the gainj.Geek wants his skill to get maximised

input:- s skills, n number of problems, d days, problem array
s = 25, n = 3, d = 3, Problems = [[35,45],[13,6],[100,4]]
output, geek only able to solve the 13 rating question, so he gain the skills of 
6, which will add to his skills 25+6 => 31 this is ans.
*/

//Brute Force is that, we will do, one by one search of problem rating which is
//less then the geek's skills, and add to his skills, for this we can use DFS, 
//day by day, TC: O(n^d), SC: O(n)

function maximumSkills(s, n, d, problems) {
    let maxSkill = 0;

    function dfs(day, skill, used) {
        if (day === d) {
            maxSkill = Math.max(maxSkill, skill);
            return;
        }

        for (let i = 0; i < n; i++) {
            if (skill >= problems[i][0] && !used[i]) {
                used[i] = true;
                dfs(day + 1, skill + problems[i][1], used);
                used[i] = false;
            }
        }
        // If no problem is solved on this day, proceed to the next day
        dfs(day+1, skill, used);
    }
    let used = Array(n).fill(false);
    dfs(0, s, used);
    return maxSkill;
}
console.log(maximumSkills(25, 3, 3, [[35, 45], [13, 6], [100, 4]]));

//Optimal Method - use of MaxHeap and sorting the porblem according the ratings
//TC: O(nlogn)+O(dlogn) ~ O(nlogn), SC: O(n)
class Maxheap{
  constructor(){
    this.data = [];
  }
  getParentIndex(idx){
    return Math.floor((idx-1)/2);
  }
  getLeftChildIndex(idx){
    return 2*idx+1;
  }
  getRightChildIndex(idx){
    return 2*idx+2;
  }
  swap(i1, i2){
    [this.data[i1], this.data[i2]] = [this.data[i2], this.data[i1]];
  }
  push(value){
    this.data.push(value);
    this.heapifyUp();
  }
  heapifyUp(){
    let idx = this.data.length-1;
    while(idx > 0){
      let parentIndex = this.getParentIndex(idx);
      if(this.data[idx] > this.data[parentIndex]){
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
      if(left < this.data.length && this.data[left] > this.data[largest]){
        largest = left;
      }
      if(right < this.data.length && this.data[right] > this.data[largest]){
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
  isEmpty(){
    return this.data.length === 0;
  }
}
const maximumSkillOptimal = (s,n,d,problem) => {
  //first we need to sort the problem array, according to its rating
  problem.sort((a,b) => a[0]-b[0]);

  let currentSkill = s;
  let index = 0;
  let maxHeap = new Maxheap();

  for(let day=0; day<d; day++){
    while(index < n && currentSkill >= problem[index][0]){
      maxHeap.push(problem[index][1]);
      index++;
    }

    if(!maxHeap.isEmpty()){
      currentSkill += maxHeap.poll();
    }
  }
  return currentSkill;
}
console.log("Answer of Optimal Solution ");
console.log(maximumSkillOptimal(25, 3, 3, [[35, 45], [13, 6], [100, 4]]));
console.log(maximumSkillOptimal(5, 5, 3, [[4, 3], [17, 3], [3, 5], [9, 23], [5, 1]]));