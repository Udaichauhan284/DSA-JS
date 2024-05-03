/* 165. Compare Version Numbers
3/May/2024 - Daily LC COde challenge, Topic: TwoPointer, String
Example 1:

Input: version1 = "1.01", version2 = "1.001"
Output: 0
Explanation: Ignoring leading zeroes, both "01" and "001" represent the same integer "1".
Example 2:

Input: version1 = "1.0", version2 = "1.0.0"
Output: 0
Explanation: version1 does not specify revision 2, which means it is treated as "0".
Example 3:

Input: version1 = "0.1", version2 = "1.1"
Output: -1
Explanation: version1's revision 0 is "0", while version2's revision 0 is "1". 0 < 1, so version1 < version2.
*/
 //Brute Method - simply take two array and change that version1 and 2 split by "." and change that into number, and then take max length, start the loop and find the v1 and v2 value and compare TC : O(n), SC : O(n)+O(m);
const compareVersion = (version1, version2) => {
  let ver1 = version1.split(".").map(Number);
  let ver2 = version2.split(".").map(Number);

  let maxLen = Math.max(ver1.length, ver2.length);
  for(let i=0; i<maxLen; i++){
    let v1 = ver1[i] ?? 0;
    let v2 = ver2[i] ?? 0;
    //v1 = ver1[i] !== undefined && ver1[i] !== null ? ver1[i] : 0

    if(v1 < v2) return -1;
    if(v1 > v2) return 1;
  }
  return 0;
};
console.log(compareVersion("1.01","1.001"));
console.log(compareVersion("0.1","1.1"));

//Optimal Method- instead of array, take variable v1 and v2, i and j. v1 = v1*10+parseInt(version[i]); TC : O(n), SC : O(1)
const compareVersion1 = (version1, version2) => {
  let i=0, j=0;
  while(i<version1.length || j<version2.length){
    let v1 = 0, v2 = 0;
    while(i < version1.length && version1[i] !== "."){
      v1 = v1 * 10 + parseInt(version1[i]);
      i++;
    }
    while(j < version2.length && version2[j] !== "."){
      v2 = v2 * 10 + parseInt(version2[j]);
      j++;
    }

    if(v1 < v2) return -1;
    else if (v1 > v2) return 1;
    i++;
    j++;
  }
  return 0;
}
console.log(compareVersion1("1.01","1.001"));
console.log(compareVersion1("0.1","1.1"));