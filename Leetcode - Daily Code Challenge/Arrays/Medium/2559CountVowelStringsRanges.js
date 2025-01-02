/* 2559 Count Vowel Strings Ranges
02 Jan 2025, Leetcode POTD, Array, String, Brute Method, nested loop
and optimal one with prefix sum

Input: words = ["aba","bcb","ece","aa","e"], queries = [[0,2],[1,4],[1,1]]
Output: [2,3,0]
Explanation: The strings starting and ending with a vowel are "aba", "ece", "aa" and "e".
The answer to the query [0,2] is 2 (strings "aba" and "ece").
to query [1,4] is 3 (strings "ece", "aa", "e").
to query [1,1] is 0.
We return [2,3,0].
*/

/*Brute method, first loop on left and right range of queries and then loop on
words to check the left and right word of words. TC: O(n^2), SC: O(1);
*/
const vowelStings = (words, queries) => {
  let result = [];
  for(let [l,r] of queries){
    let count = 0;
    //now for loop from l and r on words to check 
    for(let i=l; i<=r; i++){
      if(isVowel(words[i][0]) && isVowel(words[i][words[i].length-1])){
        count++;
      }
    }
    result.push(count);
  }
  return result;
}
//helper function to check, is it vowel or not
const isVowel = (char) => "aeiou".includes(char);


/*In Optimal Method, we want to vowel add from l pointer to r pointer, so 
find the cummSum of vowels from word and put into the cummSum array, then traverse 
over the queries to find out the cummsum, cummSum[r]-cummSum[l-1]
TC: O(Q+N), SC: O(N) for cummivaltive sum.
*/
const vowelString = (words, queries) => {
  let qLen = queries.length;
  let wLen = words.length;
  let result = [];
  let cummSum = Array(wLen).fill(0);

  //now traverse over the words, and find the first and last letter
  //vowel words and add it
  let sum = 0;
  for(let i=0; i<wLen; i++){
    if(isVowel(words[i][0]) && isVowel(words[i][words[i].length-1])){
      sum++;
    }
    cummSum[i] = sum;
  }

  //now traverse over the queries
  for(let i=0; i<qLen; i++){
    let left = queries[i][0];
    let right = queries[i][1];
    result[i] = cummSum[r] - (l > 0 ? cummSum[l-1] : 0);
  }
  return result;
}