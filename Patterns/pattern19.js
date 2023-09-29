function pattern19(n){
  //1st part
  let initialSpace = 0;
  for(let i=0; i<n; i++){
    let rowString="";
    //star
    for(let j=1; j<n-i; j++){
      rowString+="*";
    }
    //spaces
    for(let j=0; j<initialSpace; j++){
      rowString+=" ";
    }
    //star
    for(let j=1; j<n-i; j++){
      rowString+="*";
    }
    console.log(rowString);
    initialSpace += 2;
  }

  //2nd part
  initialSpace = 2*n -2
  for(let i=0; i<n; i++){
    let rowString="";
    //star
    for(let j=1; j<=i; j++){
      rowString+="*";
    }
    //spaces
    for(let j=0; j<initialSpace; j++){
      rowString+=" ";
    }
    //star
    for(let j=1; j<=i; j++){
      rowString+="*";
    }
    console.log(rowString);
    initialSpace -= 2;
  }
}
pattern19(5);