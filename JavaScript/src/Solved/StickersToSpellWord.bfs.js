// https://leetcode-cn.com/problems/stickers-to-spell-word/
var Test = require('../Common/Test');

var minStickers = function (stickers, target) {
    const stickerSet = stickers.map(s => new Set(s.split('')));
    for (const char of target) {
        if (stickerSet.every(sticker => !sticker.has(char))) return -1;
    }

    let stickCount = 0;
    let states = [[makeCounter(target), '']];
    while (states.length) {
        const states2 = [];
        for (const [target, sticker] of states) {
            let changed = sticker.length == 0;
            for (const char of sticker) {
                if (target.has(char)) {
                    target.set(char, target.get(char) - 1);
                    if (0 == target.get(char)) {
                        target.delete(char);
                    }
                    changed = true;
                }
            }

            if (target.size == 0) {
                return stickCount;
            }
            else {
                if (changed) {
                    for (const sticker of stickers) {
                        states2.push([new Map(target), sticker]);
                    }
                }

            }
        }
        stickCount++;
        states = states2;
    }
    return -1;  // never occur!

    function makeCounter(s) {
        const map = new Map();
        for (const char of s) {
            if (!map.has(char)) {
                map.set(char, 1);
            }
            else {
                map.set(char, map.get(char) + 1);
            }
        }
        return map;
    }
};

function test(stickers, target) {
    Test.test(minStickers, stickers, target);
}

test(["with", "example", "science"], "thehat");
test(["notice", "possible"], "basicbasic");