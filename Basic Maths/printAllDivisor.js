function printAllDivisor(n){
  //O(n)
  // for(let i=0; i<=n; i++){
  //   if(n % i === 0){
  //     console.log(i);
  //   }
  // }

  //Optimal Appoarch O(logN)
  let rowString=[];
  for(let i=1; i<=Math.sqrt(n);i++){
    if(n%i === 0){
      rowString.push(i);
      if(i!== n / i){
        rowString.push(n/i);  //corner case in here 6 * 6 i=6, n/6 = 6
      }
    }
  }
  return rowString.sort((a,b) => a-b);
}
console.log(printAllDivisor(36));