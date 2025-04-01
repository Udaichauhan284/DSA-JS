/* 2140 Solving Questions With BrainPower
01 Apr 25, leetcode POTD

Input: questions = [[3,2],[4,3],[4,4],[2,5]]
Output: 5
Explanation: The maximum points can be earned by solving questions 0 and 3.
- Solve question 0: Earn 3 points, will be unable to solve the next 2 questions
- Unable to solve questions 1 and 2
- Solve question 3: Earn 2 points
Total points earned: 3 + 2 = 5. There is no other way to earn 5 or more points.
*/

/*Method 1- recursion, in this we simple take the 
question or skip it, if we taken it, we need to skip
brainPower times next questions.
TLE
*/
var mostPoints = function(questions) {
    return solve(0, questions);
};
function solve(i, questions){
    let len = questions.length;
    if(i >= len){
        return 0;
    }

    //now take that question, so add points
    let taken = questions[i][0]+solve(i+questions[i][1]+1, questions);

    //not taken, skip the questions
    let notTaken = solve(i+1, questions);

    return Math.max(taken, notTaken);
}


/*Method 2 - recursion+memo, in this we simple take the 
question or skip it, if we taken it, we need to skip
brainPower times next questions.
We take the memo array, where only index is changing
in this we iterate over eleme only one times TC: O(n), SC: O(n)
*/
var mostPoints = function(questions) {
    let memo = Array(questions.length+1).fill(-1);
    return solve(0, questions, memo);
};
function solve(i, questions, memo){
    let len = questions.length;
    if(i >= len){
        return 0;
    }

    if(memo[i] !== -1){
        return memo[i];
    }

    //now take that question, so add points, and in solve
    //skip those brainpower questions
    let taken = questions[i][0]+solve(i+questions[i][1]+1, questions,memo);

    //not taken, skip the questions
    let notTaken = solve(i+1, questions,memo);

    memo[i] = Math.max(taken, notTaken);
    return memo[i];
}


/*Method3, In this we will use the DP, Bottom UP approch
and start filling the memo array, from right to left, and in that
we take max of currQuestion+skipones, nottaken one
Out-of-Bounds Access (memo[i + questions[i][1]])
If i + questions[i][1] exceeds the array bounds, it can result in unintended behavior.
Fix: Use memo[i + questions[i][1] + 1] only if it is within bounds; otherwise, use 0.
TC: O(n), SC: O(n)
*/
var mostPoints = function(questions) {
    let len = questions.length;
    if(len === 1){
        return questions[0][0]; //first elem, first points
    }

    let memo = Array(len+1).fill(0);

    //now start filling the memo array from right to left
    for(let i=len-1; i>=0; i--){
        //in memo, we finding the max of taken and notTaken
        let nextIndex = i+questions[i][1]+1;
        let taken = questions[i][0] + (nextIndex < len ? memo[nextIndex] : 0);
        let notTaken = memo[i+1];

        memo[i] = Math.max(taken, notTaken);
    }
    return memo[0]; //at starting in memo array, there is maxPoints
};