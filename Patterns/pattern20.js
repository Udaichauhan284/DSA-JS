function pattern20(n){
  let spaces = 2*n - 2;
  for(let i=1; i<=(2*n -1); i++){
    let rowString="";
    let stars = i;
    if(i>n) stars = 2*n - i;
    for(let j=1; j<=stars; j++){
      rowString+="*";
    }
    //space
    for(let j=1; j<=spaces; j++){
      rowString+=" ";
    }
    //stars
    for(let j=1; j<=stars; j++){
      rowString+="*";
    }
    console.log(rowString)
    if(i < n) spaces -= 2;
    else spaces += 2;
  }
}
pattern20(5);