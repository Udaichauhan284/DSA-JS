/* 648. Replace Words
07 June 2024 Leetcode String, Trie
Input: dictionary = ["cat","bat","rat"], sentence = "the cattle was rattled by the battery"
Output: "the cat was rat by the bat"
*/
/*Method 1- using two loop in JS, first loop on sentence and 
inner loop on dictornary to find the that sentence is start from
dictory word or not, of yes, then replace it
TC: O(n*m), SC: O(m)
*/
var replaceWords = function (dictionary, sentence) {
  let sentenceArr = sentence.split(" ");
  sentenceArr = sentenceArr.map((w) => {
    for (let i = 0; i < dictionary.length; i++) {
      if (w.startsWith(dictionary[i])) {
        w = dictionary[i];
      }
    }
    return w;
  });
  return sentenceArr.join(" ");
};
