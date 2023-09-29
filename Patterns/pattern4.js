// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5 

function pattern4(n){
  for(let i=1; i<=n; i++){
    let rowString="";
    for(let j=1; j<=i; j++){
      rowString+= `${i} `
    }
    console.log(rowString);
  }
}
pattern4(5);