// 1 2 3 4 5
// 1 2 3 4
// 1 2 3 
// 1 2
// 1 
function pattern6(n){
  for(let i=n;i>=1;i--){
    let rowString="";
    for(let j=1;j<=i;j++){
      rowString+=`${j} `;
    }
    console.log(rowString)
  }
}
pattern6(5)