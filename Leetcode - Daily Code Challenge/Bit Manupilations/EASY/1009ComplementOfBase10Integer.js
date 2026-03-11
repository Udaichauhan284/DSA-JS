var bitwiseComplement = function(n) {
    let num = n;
    let mask = 0;
    let ans = 0;
    if(num === 0){
        return 1;
    }
    while(num !== 0){ 
        mask = mask << 1 | 1;
        num = num >> 1;
    }
    ans = (~n) & mask;
    return ans;
};