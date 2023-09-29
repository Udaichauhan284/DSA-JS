//        *    
//      * * *
//    * * * * *
//  * * * * * * * 
//* * * * * * * * *
//  * * * * * * *
//    * * * * * 
//      * * *
//        *

function pattern7(n){
  //rows
  for(let i=0; i<n; i++){
    let rowString="";
    //space
    for(let j=0; j<n-i-1; j++){
      rowString+=" ";
    }
    //star
    for(let star=0; star<(2*i+1); star++){
      rowString+="*";
    }
    //space
    for(let j=0; j<n-i-1; j++){
      rowString+=" ";
    }
    console.log(rowString);
  }
}
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
pattern7(5);
pattern8(5);