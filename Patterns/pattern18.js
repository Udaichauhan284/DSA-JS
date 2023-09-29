// E
// D E
// C D E
// B C D E 
// A B C D E
function pattern18(n){
  for(let i=0; i<n; i++){
    let rowString="";
    for(let j=i; j>=0; j--){
      rowString+= String.fromCharCode('E'.charCodeAt(0) - j)
    }
    console.log(rowString)
  }
}
pattern18(5);