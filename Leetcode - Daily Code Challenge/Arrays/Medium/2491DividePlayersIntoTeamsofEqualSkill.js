/*2491 Divide Players Into Teams of Equal Skill
04 Oct 2024, Leetcode POTD, Array, Sorting, Math

Input: skill = [3,2,5,1,3,4]
Output: 22
Explanation: 
Divide the players into the following teams: (1, 5), (2, 4), (3, 3), where each team has a total skill of 6.
The sum of the chemistry of all the teams is: 1 * 5 + 2 * 4 + 3 * 3 = 5 + 8 + 9 = 22.
*/

/*We want each teach skills equals, so in this case first
we sort the skiils arr. and the we find out the target
skiil by low+high skill add. then take two pointer at 0
and len-1 and in while start finding the currSum equals
to target sum. TC: O(nlogn)+O(n) ~ O(nlogn), SC: O(1)
*/
var dividePlayers = function(skill) {
  let len = skill.length;
  if(len%2 !== 0){
      return -1; //if len is not even
  }
  //now sort the skills
  skill.sort((a,b) => a-b);
  //now find the targetSkillSum;
  let left = 0;
  let right = len-1;
  let targetSkillSum = skill[left]+skill[right];
  let totalChem = 0;
  while(left < right){
      let currSum = skill[left]+skill[right];
      if(currSum !== targetSkillSum){
          return -1;
      }
      totalChem += skill[left]*skill[right];
      left++;
      right--;
  }
  return totalChem;
};

/*OPtimal Method, check the constraint skill going till 
1000, so we can take the freqArr, for stroing the skill
for finding the sum so each each team have same one sum
totalSum/(len/2) then we will look into the freqArr if 
we find it we add in totalChem. TC: O(n+n)~ O(n), SC: O(1000)~O(1)
*/
var dividePlayers = function (skill) {
  let len = skill.length;
  if (len % 2 !== 0) return -1;
  let totalSum = 0;
  let freqArr = Array(1001).fill(0);
  for (let s of skill) {
      totalSum += s;
      freqArr[s] += 1;
  }
  let teams = Math.floor(len / 2);
  if (totalSum % teams !== 0) return -1;

  let targetSkillSum = Math.floor(totalSum / teams);
  let totalChem = 0;
  for (let i = 0; i < len; i++) {
      let otherPlayerSkill = targetSkillSum - skill[i];
      if (freqArr[otherPlayerSkill] <= 0) {
          return -1;
      }
      totalChem += skill[i] * otherPlayerSkill;
      freqArr[otherPlayerSkill] -= 1;
  }
  return Math.floor(totalChem/2);
};