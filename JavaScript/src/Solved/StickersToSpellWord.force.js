// https://leetcode-cn.com/problems/stickers-to-spell-word/
var Test = require('./Common/Test');

var minStickers = function (stickers, target) {
    const stickerSet = stickers.map(s => new Set(s.split('')));
    target = strToMap(target);
    for (const [char] of target) {
        if (stickerSet.every(sticker => !sticker.has(char))) return -1;
    }
    // return backTracking(new Map(), target, 0);
    return backTracking('', target, 0);

    function backTracking(sticker, target, stickCount) {
        // console.log();
        // console.log({ sticker });
        // console.log({ target });
        // console.log({ stickCount });

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
                // return Math.min(...stickers.map(s => backTracking(strToMap(s), new Map(target), stickCount + 1)));
                return Math.min(...stickers.map(s => backTracking(s, new Map(target), stickCount + 1)));
            }
            else {
                return Infinity;
            }
        }
    }


    function strToMap(s) {
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
// test(["notice", "possible"], "basicbasic");