// https://leetcode-cn.com/problems/english-int-lcci/
var Test = require('../Common/Test');

var numberToWords = function (num) {
    if (num == 0) return "Zero";
    const intMap = [
        "", "One", "Two", "Three", "Four",
        "Five", "Six", "Seven", "Eight", "Nine",
        "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen",
        "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen",
        "Twenty"
    ];
    const tensMap = ["Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    const big = ["", "Thousand", "Million", "Billion"];

    let index = 0;
    let s = "";
    do {
        const threeDigits = num % 1000;
        if (threeDigits > 0) {
            const hundreds = Math.trunc(threeDigits / 100);
            const twoDigits = threeDigits % 100;
            const rest = twoDigits <= 20 ?
                intMap[twoDigits] :
                `${tensMap[Math.trunc((twoDigits - 20) / 10)]} ${intMap[twoDigits % 10]}`;
            s = `${hundreds > 0 ? intMap[hundreds] + " Hundred " : ""}${rest} ${big[index]} ${s}`;
        }
        num = Math.trunc(num / 1000);
        index++;
    } while (num > 0);
    return s.replace(/ +/g, ' ').trim();
};

function test(input) {
    Test.test(numberToWords, input);
}

// test(3);
// test(30);
// test(13);
// test(23);
// test(53);
// test(123);
// test(1001);
// test(50868);
// test(100000);
test(1000000);
// test(1234567);
// test(1234567891);