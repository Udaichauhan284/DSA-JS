// * * * *
// * * * *
// * * * *
// * * * *

function pattern1(n){
  for(let inner=0; inner<n; inner++){
    let rowString = "";
    for(let outer=0; outer<n; outer++){
      rowString+= "* ";
    }
    console.log(rowString)
  }
}
pattern1(4)