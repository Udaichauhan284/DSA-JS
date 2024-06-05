/* 1002. Find Common Characters
05 June 2024 - LC - POTD topic: string, freq array
Input: words = ["bella","label","roller"]
Output: ["e","l","l"]
*/
/*In this we take count array, adn fill this array for first word
and take a temp for rest word in words array and then compare
count and temp array, fill count with min value
TC: O(m)+O(n*m*26)+O(26) ~ O(n*m), SC: O(26)~O(1), but in worst case result array will have all char O(n*m)
*/
var commonChars = function (words) {
  let result = [];
  let count = Array(26).fill(0);
  let n = words.length;
  //fill the count arry with first word
  fillCount(words[0], count);

  //now fill the temp array with next word to compare with count
  for (let i = 1; i < n; i++) {
    let temp = Array(26).fill(0);
    fillCount(words[i], temp);
    //now compare count and temp and fill count with min
    for (let j = 0; j < 26; j++) {
      count[j] = Math.min(count[j], temp[j]);
    }
  }

  //now fill the result array
  for (let i = 0; i < 26; i++) {
    if (count[i] > 0) {
      let c = count[i];
      while (c--) {
        result.push(String.fromCharCode(i + "a".charCodeAt(0)));
      }
    }
  }
  return result;
};
function fillCount(word, count) {
  for (let ch of word) {
    count[ch.charCodeAt(0) - "a".charCodeAt(0)]++;
  }
}
