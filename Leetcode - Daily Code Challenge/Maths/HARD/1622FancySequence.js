class Fancy {
    constructor() {
        this.M = 1000000007n;
        this.seq = [];
        this.add = 0n;
        this.mult = 1n;
    }

    // Binary exponentiation (modular power)
    power(a, b) {
        if (b === 0n) return 1n;

        let half = this.power(a, b / 2n);
        let result = (half * half) % this.M;

        if (b % 2n === 1n) {
            result = (result * a) % this.M;
        }

        return result;
    }

    append(val) {
        val = BigInt(val);

        // reverse transformation
        let x = ((val - this.add) % this.M + this.M) % this.M;
        x = (x * this.power(this.mult, this.M - 2n)) % this.M;

        this.seq.push(x);
    }

    addAll(inc) {
        this.add = (this.add + BigInt(inc)) % this.M;
    }

    multAll(m) {
        m = BigInt(m);

        this.mult = (this.mult * m) % this.M;
        this.add = (this.add * m) % this.M;
    }

    getIndex(idx) {
        if (idx >= this.seq.length) return -1;

        let result = (this.seq[idx] * this.mult + this.add) % this.M;

        return Number(result);
    }
}
