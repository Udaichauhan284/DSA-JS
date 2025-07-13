/* 2410. Maximum Matching of Players With Trainers
13 July 2025, leetcode POTD, Medium
Input: players = [4,7,9], trainers = [8,2,5,8]
Output: 2
Explanation:
One of the ways we can form two matchings is as follows:
- players[0] can be matched with trainers[0] since 4 <= 8.
- players[1] can be matched with trainers[3] since 7 <= 8.
It can be proven that 2 is the maximum number of matchings that can be formed.
*/

/* This is okay, but failed for one test case
p = [1,10], t=[10,1], 1for1, 10for10, we get 2 count
TC: O(n*m), SC: O(1)
*/
var matchPlayersAndTrainers = function(players, trainers) {
    let lenP = players.length;
    let lenT = trainers.length;
    let count = 0;
    for(let i=0; i<lenP; i++){
        for(let j=0; j<lenT; j++){
            if(players[i] <= trainers[j]){
                count++;
                //now i pick the trainer, mark that trainer
                trainers[j] = -1;
                break;
            }
        }
    }
    return count;
};



/*We can store the both players and trainer array, so that
we can match same and higher trainer with appropiate players
then we can use the Two Pointer
TC: O(nlogn), SC : O(1)
*/
var matchPlayersAndTrainers = function(players, trainers) {
    let lenP = players.length;
    let lenT = trainers.length;
    //now sort the both arrays
    players.sort((a,b) => a-b);
    trainers.sort((a,b) => a-b);

    //now use the two pointer method
    let i=0, j=0, count=0;
    while(i < lenP && j < lenT){
        if(players[i] > trainers[j]){
            //means player is bigger then trainer, he cant
            //train him, so move the j, to look for new one
            j++;
        }else{
            //means player is less then trainer, now he can
            //train them
            count++;
            i++;
            j++;
            //move both i and j, as they match and need to 
            //move for looking for new pair
        }
    }
    return count;
};