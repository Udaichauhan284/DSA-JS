// 4 4 4 4 4 4 4 
// 4 3 3 3 3 3 4 
// 4 3 2 2 2 3 4 
// 4 3 2 1 2 3 4 
// 4 3 2 2 2 3 4 
// 4 3 3 3 3 3 4 
// 4 4 4 4 4 4 4 

function pattern22(n){
  for(let i=0; i<(2*n-1); i++){
    let rowString="";
    for(let j=0; j<(2*n-1); j++){
      let top = i;
      let left = j;
      let right = (2*n - 2) - j;
      let bottom = (2*n - 2) - i;
      let minDistance = Math.min(top,bottom,left,right);
      rowString+= n - minDistance + " ";
    }
    console.log(rowString);
  }
}
pattern22(4);