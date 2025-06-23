/* 2081. SUm of K Mirror Numbers
23 June 25, Leetcode POTD HARD

*/

const isPalindrome = (baseK) => {
    let i = 0;
    let j = baseK.length - 1;

    while (i <= j) {
        if (baseK[i] !== baseK[j]) {
            return false;
        }
        i++;
        j--;
    }

    return true;
}

const convertToBaseK = (num, k) => {
    if (num === 0n) return "0";

    k = BigInt(k);
    let res = "";
    while (num > 0n) {
        res += (num % k).toString();
        num = num / k;
    }

    return res;
}
const kMirror = (k, n) => {
    lk = BigInt(k);
        n = BigInt(n);

        let sum = 0n;
        let L = 1;

        while (n > 0n) {
            const halfLength = Math.floor((L + 1) / 2);
            const minNum = BigInt(Math.pow(10, halfLength - 1));
            const maxNum = BigInt(Math.pow(10, halfLength)) - 1n;

            for (let num = minNum; num <= maxNum; num++) {
                const firstHalf = num.toString();
                const secondHalf = firstHalf.split('').reverse().join('');

                let pal = "";
                if (L % 2 === 0) {
                    pal = firstHalf + secondHalf;
                } else {
                    pal = firstHalf + secondHalf.substring(1);
                }

                const palNum = BigInt(pal);
                const baseK = convertToBaseK(palNum, k);

                if (isPalindrome(baseK)) {
                    sum += palNum;
                    n--;
                    if (n === 0n) break;
                }
            }

            L++;
        }

        return Number(sum);
}