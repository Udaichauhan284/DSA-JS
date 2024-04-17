/* Given a set of N jobs where each jobi has a deadline and profit associated with it.

Each job takes 1 unit of time to complete and only one job can be scheduled at a time. We earn the profit associated with job if and only if the job is completed by its deadline.

Find the number of jobs done and the maximum profit.

Note: Jobs will be given in the form (Jobid, Deadline, Profit) associated with that Job. Deadline of the job is the time before which job needs to be completed to earn the profit.

Input:
N = 4
Jobs = {(1,4,20),(2,1,10),(3,1,40),(4,1,30)}
Output:
2 60
Explanation:
Job1 and Job3 can be done with
maximum profit of 60 (20+40).
*/
class Job{
  constructor(id, dead, profit){
      this.id = id;
      this.dead = dead;
      this.profit = profit;
  }
}
class Solution {
  JobScheduling(arr,n){
    //first sort the job by its profit in descending order, os thta greedy method can be apply
    arr.sort((a,b) => b.profit-a.profit);
    let result = [];
    let maxi = arr[0].dead; //max dealine, so that , max deadline job can perform first, take a array and fill the -1, so it will easy to find the job id and profit
    let slot = new Array(maxi+1).fill(-1);
    let countJobs = 0, profit= 0;
    for(let i=0; i<n; i++){
      for(let j=arr[i].dead; j>0; j--){
        if(slot[j] === -1){
          slot[j] = i;
          countJobs++;
          profit += arr[i].profit;
          break;
        }
      }
    }
    result.push(countJobs,profit);
    return result;
  }
}