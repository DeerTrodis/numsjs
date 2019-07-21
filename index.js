'use strict';


const helperAddBin = (tmp, res) => tmp >= 2 ? ({carry: 1, res: tmp - 2 + res}) : ({carry: 0, res: tmp + res})

function add(...arr) {
    return arr.reduce((acc, val) => acc + val, 0)
}

function sub(...arr) {
    let subtracted = arr[0]
    return arr.reduce((acc, val) => acc - val, subtracted * 2)
}

function mul(...arr) {
    return arr.reduce((acc, val) => acc * val, 1)
}

function div(a, b) {
    if (b == 0) {
        return Number.MAX_SAFE_INTEGER
    }
    else {
        return a / b
    }
}

function isPalindrome(x) {
    return x.toString().split('').reverse().join('') == x.toString()
};

function getPermutation(n, k) {
    let arr = [], res = '', fib = [], tmp = 1
    for (let i = 1; i <= n; i++) {
        arr[i - 1] = i
        tmp *= i
        fib[i] = tmp
    } 
    fib[0] =1
    k--;
    for (let i = 1; i <= n; i++) {
        let ind = Math.floor(k / fib[n - i])
        
        res += arr[ind]
        arr.splice(ind, 1)
        k -= ind * fib[n - i]
    }
    return res
};

function computeArea(rec1, rec2) {
    let [A, B, C, D] = rec1, [E, F, G, H] = rec2;
    let area1 = (C - A) * (D - B), area2 = (G - E) * (H - F);
    let top = Math.min(D, H), bottom = Math.max(B, F), left = Math.max(A, E), right = Math.min(C, G), overlap = 0
    if (top > bottom && right > left)
        overlap += (top - bottom) * (right - left)
    return area1 + area2 - overlap
};

function addBinary(a, b) {
    let aLen = a.length - 1, bLen = b.length - 1, res = '', carry = 0
    while (aLen >=0 && bLen >= 0) {
        let tmp = Number(a[aLen]) + Number(b[bLen]) + carry;
        ({carry, res} = helperAddBin(tmp, res));
        aLen--;
        bLen--;
    }
    while (aLen >= 0) {
        let tmp = Number(a[aLen]) + carry;
        ({carry, res} = helperAddBin(tmp, res));
        aLen--
    }
    while (bLen >= 0) {
        let tmp = Number(b[bLen]) + carry;
        ({carry, res} = helperAddBin(tmp, res));
        bLen--
    }
    return carry == 1 ? '1' + res : res
};


function figureConverter(n, k) {
    let res = ''
    while (n > 0) {
        let m = n % k, ch
        if (m == 0) {
            ch = String.fromCharCode(65 + k - 1)
            m = k
        }
        else
            ch = String.fromCharCode(65 + m - 1)
        res = ch + res
        n -= m
        n /= k
            
    }
    return res
};


module.exports = {
    add,
    sub,
    mul,
    div,
    isPalindrome,
    getPermutation,
    computeArea,
    addBinary,
    figureConverter
}