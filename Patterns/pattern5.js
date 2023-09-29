// * * * * *
// * * * *
// * * *
// * *
// *

function pattern5(n){
  for(let i=1; i<=n; i++){
    let rowString="";
    for(let j=n; j>=i; j--){
      rowString+="* ";
    }
    console.log(rowString);
  }
}
pattern5(5);