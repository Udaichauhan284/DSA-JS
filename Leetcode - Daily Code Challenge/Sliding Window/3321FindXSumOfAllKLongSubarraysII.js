const { AvlTree } = require("datastructures-js");

class Helper {
    constructor(x) {
        this.x = x;
        this.result = 0n;

        const comparator = (a, b) => {
            if (a[0] !== b[0]) {
                return a[0] - b[0];
            }
            return a[1] - b[1];
        };

        this.large = new AvlTree(comparator);
        this.small = new AvlTree(comparator);
        this.occ = new Map();
    }

    insert(num) {
        const currentFreq = this.occ.get(num) || 0;
        if (currentFreq > 0) {
            this.internalRemove([currentFreq, num]);
        }

        const newFreq = currentFreq + 1;
        this.occ.set(num, newFreq);
        this.internalInsert([newFreq, num]);
    }

    remove(num) {
        const currentFreq = this.occ.get(num);
        if (currentFreq === undefined || currentFreq === 0) {
            return;
        }
        this.internalRemove([currentFreq, num]);
        const newFreq = currentFreq - 1;
        if (newFreq > 0) {
            this.occ.set(num, newFreq);
            this.internalInsert([newFreq, num]);
        } else {
            this.occ.delete(num);
        }
    }

    get() {
        return Number(this.result);
    }

    internalInsert(p) {
        const [freq, value] = p;
        const minLarge = this.large.min();
        if (
            this.large.count() < this.x ||
            (minLarge && this.comparePairs(p, minLarge.getValue()) > 0)
        ) {
            this.result += BigInt(freq) * BigInt(value);
            this.large.insert(p);
            if (this.large.count() > this.x) {
                const smallestLarge = this.large.min();
                if (smallestLarge) {
                    const value = smallestLarge.getValue();
                    this.result -= BigInt(value[0]) * BigInt(value[1]);
                    this.large.remove(value);
                    this.small.insert(value);
                }
            }
        } else {
            this.small.insert(p);
        }
    }

    internalRemove(p) {
        const [freq, value] = p;
        if (this.large.has(p)) {
            this.result -= BigInt(freq) * BigInt(value);
            this.large.remove(p);
            if (this.small.count() > 0) {
                const largestSmall = this.small.max();
                if (largestSmall) {
                    const value = largestSmall.getValue();
                    this.result += BigInt(value[0]) * BigInt(value[1]);
                    this.small.remove(value);
                    this.large.insert(value);
                }
            }
        } else {
            this.small.remove(p);
        }
    }

    comparePairs(a, b) {
        if (a[0] !== b[0]) {
            return a[0] - b[0];
        }
        return a[1] - b[1];
    }
}

var findXSum = function (nums, k, x) {
    const helper = new Helper(x);
    const ans = [];
    for (let i = 0; i < nums.length; i++) {
        helper.insert(nums[i]);
        if (i >= k) {
            helper.remove(nums[i - k]);
        }
        if (i >= k - 1) {
            ans.push(helper.get());
        }
    }

    return ans;
};

