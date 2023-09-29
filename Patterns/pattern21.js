// * * * *
// *     *
// *     *
// * * * *

//filling the boundaries of square
function pattern21(n){
  for(let i=0; i<n; i++){
    let rowString="";
    for(let j=0; j<n; j++){
      if(i===0 || j===0 || i===n-1 || j===n-1){
        rowString+="*";
      } else rowString+= " ";
    }
    console.log(rowString);
  }
}
pattern21(5);