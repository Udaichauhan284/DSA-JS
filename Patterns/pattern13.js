// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15
function pattern13(n){
  let num = 1;
  for(let i=1; i<=n; i++){
    let rowString="";
    for(let j=1; j<=i; j++){
      rowString+=`${num} `;
      num++;
    }
    console.log(rowString);
  }
}
pattern13(5);