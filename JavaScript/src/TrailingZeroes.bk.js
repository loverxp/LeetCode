var trailingZeroes = function (n) {
    let count5 = 0;
    for (let i = 5; i <= n; i *= 5) {
        count5++;
    }
    count5 = (1 + count5) * count5 / 2 - count5;
    return Math.trunc(n / 10) * 2 + (n % 10 >= 5 ? 1 : 0) + count5;
};

fact = n => {
    if (n == 1) return 1;
    else return n * fact(n - 1);
};

factS = (n, s) => {
    if (n == s) return 1;
    else return n * factS(n - 1, s);
};


// console.log(fact(6));
// console.log(fact(111));
// console.log(fact(11));
// console.log(fact(25));
// console.log(fact(20));
// console.log(factS(21, 20));
// console.log(factS(24, 20));
// console.log(factS(25, 20));
// console.log(factS(26, 20));
// console.log(factS(30, 20));
// console.log(trailingZeroes(3));
// console.log(trailingZeroes(5));
// console.log(trailingZeroes(10));
console.log(trailingZeroes(15));
// console.log(trailingZeroes(111));
// console.log(trailingZeroes(20));
// console.log(trailingZeroes(25));
console.log(trailingZeroes(30));
console.log(trailingZeroes(124));
console.log(trailingZeroes(125));
// console.log(trailingZeroes(126));
// console.log(trailingZeroes(225));
// console.log(trailingZeroes(624));
// console.log(trailingZeroes(625));