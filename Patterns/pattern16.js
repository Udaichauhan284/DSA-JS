// A 
// B B
// C C C 
// D D D D
// E E E E E
function pattern16(n){
  for(let i=1; i<=n; i++){
    let rowString="";
    for(let j=1;j<=i;j++){
      rowString+= String.fromCharCode('A'.charCodeAt(0) + i - 1);
    }
    console.log(rowString);
  }
}
pattern16(5);