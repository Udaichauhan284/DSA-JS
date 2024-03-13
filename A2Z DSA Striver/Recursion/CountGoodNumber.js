/* 1922. COunt Good Number.
for all even places, digits will be even.
for all odd places, digits will be prime.

n = 5, odd places len/2 = (5/2) = 2 odd places, for even do like this odd = n-even (5-2) = 3 even places or even + len%2 
2+(5%2) => 2+1 = 3 even places
return 5^even * 4^odd
how many even number 0-9 => 0,2,4,6,8 so that why at even place how many possiblity of even number 5^even
how many prime number 0-9 => 2,3,5,7 => 4 so that why at odd place how many possibility of prime number 4^odd.
 */
//TC O(logN), SC O(1)
const countGoodNumbers = (n) => {
  n = BigInt(n);
  const mod = BigInt(10**9 + 7);
  let even = (n+1n)/3n;
  let odd = n-even;

  return (power(5,even) * power(4,odd)) % mod;

  //power funtion
  function power(x,n){
    x = BigInt(x);
    if(n===0){
      return 1;
    }
    let halfPower = power(x, n/2n);
    if(n % 2n === 0n){
      return (halfPower * halfPower) % mod;
    }else{
      return (x * halfPower * halfPower) % mod;
    }
  }
}