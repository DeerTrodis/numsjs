'use strict';

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

module.exports = {
    add,
    sub,
    mul,
    div,
}