/* 2818. Apply Operations Maximiz Score 
29 March 25, Leetcode POTD
HARD

*/

class Modulo {
    constructor(modulo) {
        this.modulo = modulo;
        this._phi = modulo - 1;
    }

    getPhi() {
        return this._phi;
    }

    getInverse(a) {
        return this.pow(a, this.getPhi() - 1);
    }

    add(...numbers) {
        let result = 0;
        for (let number of numbers) {
            result = (result + (number % this.modulo)) % this.modulo;
        }
        if (result < 0) result += this.modulo;
        return result;
    }

    _quickMul(a, b) {
        a = ((a % this.modulo) + this.modulo) % this.modulo;
        b = ((b % this.modulo) + this.modulo) % this.modulo;
        if (a === 0 || b === 0) return 0;
        let result = 0;
        while (b) {
            while (b % 2 === 0) {
                a = (a * 2) % this.modulo;
                b /= 2;
            }
            if (b % 2 !== 0) {
                result = (result + a) % this.modulo;
                b--;
            }
        }
        return result;
    }

    mul(...numbers) {
        let result = 1;
        for (let number of numbers) {
            if (number > 0 && number < 1)
                number = this.getInverse(Math.round(1 / number));
            result = this._quickMul(result, number);
            if (result === 0) return 0;
        }
        if (result < 0) result += this.modulo;
        return result;
    }

    div(a, b) {
        return this._quickMul(a, this.getInverse(b));
    }

    pow(a, b) {
        a = ((a % this.modulo) + this.modulo) % this.modulo;
        if (a === 0) return 0;
        let result = 1;
        while (b) {
            while (b % 2 === 0) {
                a = this._quickMul(a, a);
                b /= 2;
            }
            if (b % 2 !== 0) {
                result = this._quickMul(result, a);
                b--;
            }
        }
        return result;
    }
}
const mod = new Modulo(1000000007);

function initEratosthenesSieve(n) {
    let eratosthenesSieve = Array(n + 1).fill(0);
    eratosthenesSieve[1] = 0;
    for (let i = 2; i <= n; i++) {
        if (!eratosthenesSieve[i]) {
            for (let j = i; j <= n; j += i) {
                eratosthenesSieve[j]++;
            }
        }
    }
    return eratosthenesSieve;
}
let eratosthenesSieve = initEratosthenesSieve(100000);
var maximumScore = function (nums, k) {
    const n = nums.length;
    const pre = Array(n).fill(0);
    const pos = Array(n).fill(n);
    function isMorePriority(l, r) {
        return eratosthenesSieve[nums[l]] >= eratosthenesSieve[nums[r]];
    }
    let st = [];
    for (let i = 0; i < n; i++) {
        while (st.length && !isMorePriority(st[st.length - 1], i)) st.pop();
        pre[i] = st.length ? st[st.length - 1] : -1;
        st.push(i);
    }
    st = [];
    for (let i = n - 1; i >= 0; i--) {
        while (st.length && isMorePriority(i, st[st.length - 1])) st.pop();
        pos[i] = st.length ? st[st.length - 1] : n;
        st.push(i);
    }
    const indices = Array.from(Array(n), (_, i) => i);
    indices.sort((a, b) => nums[b] - nums[a]);
    let result = 1;
    for (let i = 0; i < n; i++) {
        const ind = indices[i];
        const pow = Math.min((ind - pre[ind]) * (pos[ind] - ind), k);
        result = mod.mul(result, mod.pow(nums[ind], pow));
        k -= pow;
        if (!k) return result;
    }
};