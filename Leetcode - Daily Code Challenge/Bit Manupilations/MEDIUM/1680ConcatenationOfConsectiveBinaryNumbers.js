var concatenatedBinary = function(n) {
    let result = 0;
    const MOD = 1000000007;
    let digits = 0;
    for(let num=1; num<=n; num++){
        //now we will find the digits, if num is power of 
        //2 increase the digits
        if((num & (num - 1)) === 0) digits++;
        //now we need add that num into result
        //for that need to increase space for 
        //digit do left shift
        result = (result * (1 << digits) + num) % MOD;
    }
    return result;
};