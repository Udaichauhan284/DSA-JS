function prime(n){
  //Brute Force O(n)
  // let count=0;
  // for(let i=1; i<=n; i++){
  //   if(n%i === 0){
  //     count++;
  //   }
  // }

  //Optimal O(logN)
  let count = 0;
  for(let i=1; i<=Math.sqrt(n); i++){
    if(n%i === 0){
      count++;
      if(i !== n/i){
        count++
      }
    }
  }
  if(count === 2) return true;
  return false;
}
console.log(prime(31));




class Solution {
  isPrime(n) {
        //your code goes here
        if(n < 2){
          return false; //edge case, Prime start from 2
        }
        for(let i=2; i<=Math.sqrt(n); i++){
          if(n % i === 0){
            return false;
          }
        }
        return true;
  }
}