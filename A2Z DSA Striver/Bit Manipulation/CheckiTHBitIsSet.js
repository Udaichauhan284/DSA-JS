/* Check if ith bit is set or not
n = 13, i = 2, 1101 so 2 bit from right is 1 yes it is set.
we can do this by both left (<<) and right (>>) shift

-- Left shift (<<)
here first we need to do 1 << by i and then perfrom AND with N , if it not zero , non set
*/
function checkIthBit(n,i){
  //doind by left shift (<<)
  // if((n & (1<<i)) !== 0)
  
  //right shift N >> i & 1
  if(((n>>i) & 1) !== 0){
    console.log(i + " ith bit is Set bit - 1");
  }else {
    console.log(i + " ith bit is Non Set bit - 0");
  }
}
checkIthBit(13,2); //1101 - 1 set
checkIthBit(13,1); //1101 - 0 non set