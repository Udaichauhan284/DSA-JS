// *********
//  *******
//   *****
//    ***
//     *
function pattern8(n){
  for(let i=n; i>0; i--){
    let rowString="";
    //spaces
    for(let j=0; j<n-i; j++){
      rowString+=" ";
    }
    //star
    for(let star=0; star<(2*i-1); star++){
      rowString+="*"
    }
    //space
    for(let j=0; j<n-i; j++){
      rowString+=" ";
    }
    console.log(rowString)
  }
}
pattern8(5);