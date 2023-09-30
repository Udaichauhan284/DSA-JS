function gcd(a,b){
  //let ans = 0;
  //Brute Force
  // for(let i=1 ; i<=Math.min(a,b); i++){
  //   if(a%i === 0 && b%i===0){
  //     ans = i;
  //   }
  // }

  //Eucildean Algo gcd(a,b) = gcd(a%b, b)
  if(b===0){
    return a;
  }
  return gcd(b, a%b);
}
console.log(gcd(0, 8));