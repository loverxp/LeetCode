// https://leetcode-cn.com/problems/text-justification/
var Test = require('./Common/Test');
var { Matrix } = require('./Common/Matrix');

Test.isLogOn = false;

var fullJustify = function (words, maxWidth) {
    let line = [];
    const lines = [line];
    let width = 0;
    for (const word of words) {
        // if (width + word.length + 1 > maxWidth) {
        if (width + word.length > maxWidth) {
            width = word.length + 1;
            line = [word];
            lines.push(line);
        }
        else {
            width += word.length + 1;
            line.push(word);
        }
    }

    return lines.map((line, i) => {
        Test.log();
        Test.log(line);
        Test.log({ i });
        if (i == lines.length - 1) {
            return line.join(' ');
        }
        else {
            if (line.length == 1) {
                return line[0];
            }
            else {
                const rest = maxWidth - line.reduce((length, str) => length + str.length, 0);
                // console.log({ rest });
                // console.log(line.length);

                // console.log(Math.trunc((rest / (line.length - 1)) + 1));
                // console.log(Math.trunc((rest / (line.length - 1))));


                // return line.join(' '.repeat(Math.trunc(rest / (line.length - 1)) + 1));


                const spaceLength = Math.trunc(rest / (line.length - 1));
                const count = Math.trunc(rest % (line.length - 1))

                // return [line.slice(0, count).join(' '.repeat(spaceLength)), ...line.slice(count, line.length - 1)]
                //     .join(' '.repeat(spaceLength - 1));


                return line.join(' '.repeat(spaceLength));
            }
        }
    });
};

function test(words, maxWidth) {
    // Test.test(fullJustify, words, maxWidth);
    const test = new Test.Test(fullJustify, words, maxWidth);
    test.resultLogger = function (result) {
        Matrix.logMatrixInString(result);
    }
    test.do();
}

test(["This", "is", "an", "example", "of", "text", "justification."], 16);
test(["What", "must", "be", "acknowledgment", "shall", "be"], 16);
test(["Science", "is", "what", "we", "understand", "well", "enough", "to", "explain", "to", "a", "computer.", "Art", "is", "everything", "else", "we", "do"], 20);

// ["This", "is", "an", "example", "of", "text", "justification."]
// 16
// ["What", "must", "be", "acknowledgment", "shall", "be"]
// 16
// ["Science", "is", "what", "we", "understand", "well", "enough", "to", "explain", "to", "a", "computer.", "Art", "is", "everything", "else", "we", "do"]
// 20