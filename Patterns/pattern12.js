// 1      1
// 12    21
// 123  321
// 12344321
function pattern12(n){
  for(let i=1; i<=n; i++){
    let rowString="";
    //number
    for(let j=1; j<=i; j++){
      rowString+= `${j}`;
    }
    //space
    for(let space=1; space<=2*(n-i); space++){
      rowString+=" ";
    }
    //number
    for(let j=i; j>=1; j--){
      rowString+= `${j}`;
    }
    console.log(rowString);
  }
}
pattern12(5);