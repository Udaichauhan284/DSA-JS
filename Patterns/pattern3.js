// 1 
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

function pattern3(n){
  for(let i=1; i<=n; i++){
    let rowString="";
    for(let j=1; j<=i; j++){
      rowString+= `${j} `;
    }
    console.log(rowString)
  }
}
pattern3(5);