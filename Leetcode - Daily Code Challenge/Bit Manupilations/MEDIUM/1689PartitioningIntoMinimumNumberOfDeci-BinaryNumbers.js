var minPartitions = function(n) {
   let maxCh = '0';

    for (let ch of n) {
        if (ch > maxCh) {
            maxCh = ch;
        }
    }

    return maxCh.charCodeAt(0) - '0'.charCodeAt(0);
    
};