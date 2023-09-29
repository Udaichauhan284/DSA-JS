// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1
function pattern10(n){
  let start=1;
  for(let i=1; i<=n; i++){
    let rowString="";
    if(i%2 === 0) {
      start = 0;
    }
    else start = 1;
    
    for(let j=1; j<=i; j++){
      rowString+=`${start} `;
      start = 1-start
    }
    console.log(rowString)
  }
}
pattern10(5);