/* Pascal Triangle
Type 1 print element at given row and col.
here use formula RcC = (r-1)C(c-1) => row-4, col=2, 4!/2!(4-2)!
*/
//Type 1. Better Approach O(r)
function nCr(r,c){
  let res =1;
  for(let i=0; i<c; i++){
    res = res * (r-i);
    res = res / (i+1);
  }
  return res;
}
function type1FindElement(r,c){
  const element = nCr(r-1, c-1);
  return element;
}
console.log(type1FindElement(5,3));

//Type 2. generate the row at given nth row. Here use ans *= (row-col)/col and col will increase 0-col
//O(n)
function type2FindRow(r){
  let ans = 1;
  let ansRow = [1];
  for(let i=1; i<r; i++){
    ans = ans * (r-i);
    ans = Math.floor(ans / i);
    ansRow.push(ans);
  }
  return ansRow;
}
//type2FindRow(5);

//type 3. print all the pascal triangle
function type3PascalTriangle(n){
  let ans = [];
  for(let i=1; i<=n; i++){
    ans.push(type2FindRow(i));
  }
  return ans;
}
console.log(type3PascalTriangle(5));