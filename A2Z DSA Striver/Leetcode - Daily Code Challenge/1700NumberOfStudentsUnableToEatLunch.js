/* 1700.Number of Studnets unable to eat lunch
08/Apr/2024 - topic : array, stack, queue, simulation.
students = [1,1,0,0], sandwiches [0,1,0,1]
*/
//Brute method - use of stack and queue DS, and do the steps which are mentioned TC : O(n), SC : O(2n)
const countStudents = (students,sandwiches) => {
  let len = students.length;
  let st = []; // for sandiches
  let que = []; //for students
  for(let i=0; i<len; i++){
    //pushing in the st and que
    st.push(sandwiches[len-i-1]); //reverse because, sandwiches first elem will be top
    que.push(students[i]);
  }

  let lastServerd = 0;
  while(que.length !== 0 && lastServerd < que.length){
    if(st[st.length-1] === que[0]){
      st.pop();
      que.shift(); //remove the first of que and top of stack, if they both match
      lastServerd = 0;
    }else{
      que.push(que[0]);
      que.shift();
      lastServerd++;
    }
  }
  return que.length;
}
console.log(countStudents([1,1,0,0],[0,1,0,1]));
console.log(countStudents([1,1,1,0,0,1],[1,0,0,0,1,1]));

//Optimal Method, just take a arr of 2 , 0 for 0 sandwiches and 1 for suqare sandwiched and increase the count of respectively and match that with student arr. TC O(n), SC : O(1)
const countStudent1 = (students,sandwiches) => {
  let len = students.length;
  let arr = new Array(2).fill(0);
  for(let stud of students){
    arr[stud]++;
  }

  for(let i=0; i<len; i++){
    let sand = sandwiches[i];
    if(arr[sand] === 0){
      return len-i;
    }
    arr[sand]--;
  }
  return 0;
}
console.log(countStudent1([1,1,0,0],[0,1,0,1]));