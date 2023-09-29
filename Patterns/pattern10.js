// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
// *
function pattern10(n){
  let i;
  let star;
  for(i=1; i<=(2*n-1); i++){
    let rowString="";
    star = i;
    if(i>n){
      star = (2*n - i);
    }
    for(let j=1; j<=star; j++){
      rowString+="* ";
    }
    console.log(rowString);
  }
}
pattern10(5);