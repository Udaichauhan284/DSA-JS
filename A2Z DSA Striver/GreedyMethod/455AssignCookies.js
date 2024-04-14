/* 455. Assign Cookies
g = [1,2,3] s=[1,1]
g is greed of child and s is size of cookies which we need to distributed in child, so that child will be statified we can only give that cookies, s[j] >= g[i]

Method
1. sort the both array, take two traversal pointer i and j for greed and cookies respectively, and check g[i] <= s[j] i++ measn child satisfies, move forwaard, other wise move the cookies pointer forwar j++
O(2nlogn) + O(n) ~ O(3nlogn) ~ O(nlogn), SC : O(1)
*/
const findContentChildren = (g,s) => {
  //g for greed, s for cookies
  g.sort((a,b) => a-b);
  s.sort((a,b) => a-b);

  let lenG = g.length; //length of greed array
  let lenS = s.length; //length of cookies array
  let i=0; 
  let j=0;
  while(i < lenG && j < lenS){
    if(g[i] <= s[j]){
      //statisfied
      i++;
    }
    j++;
  }
  return i;
}
console.log(findContentChildren([1,2,3],[1,1])); //1
console.log(findContentChildren([1,2],[1,2,3])); //2
console.log(findContentChildren([1,2,3],[1,2,3])); //3