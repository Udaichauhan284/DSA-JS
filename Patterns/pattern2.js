// *
// * *
// * * *
// * * * * 
// * * * * *

function pattern2(n){
  for(let inner=0; inner<n; inner++){
    let rowString = "";
    for(let outer=0; outer<=inner; outer++){
      rowString+= "* ";
    }
    console.log(rowString);
  }
}
pattern2(5);