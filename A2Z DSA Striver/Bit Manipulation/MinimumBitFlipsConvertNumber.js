 //1. First Do XOR of goal and start, we get the idea, how many sets bits are there, 2. then count the set bits in ans. TC(no of set bits in ans). SC O(1);
 const minBitFlips = function(start, goal){
      let ans = 0;
      ans = start ^ goal;

      let count = 0;
      while(ans !== 0){
        ans = ans & (ans-1);
        count++;
      }
      return count;
 }
 console.log(minBitFlips(10,7));