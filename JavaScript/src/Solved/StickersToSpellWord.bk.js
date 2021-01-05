// https://leetcode-cn.com/problems/stickers-to-spell-word/
var Test = require('./Common/Test');

var minStickers = function (stickers, target) {
    stickers = stickers.map(s => new Set(s.split('')));
    // stickers = stickers.map(s => {
    //     const map = new Map();
    //     for (const char of s) {
    //         if (!map.has(char)) {
    //             map.set(char, 1);
    //         }
    //         else {
    //             map.set(char, map.get(char) + 1);
    //         }
    //     }
    //     return map;
    // });
    // return stickers;
    // target = new Set(target.split(''));
    target = strToMap(target);
    // return target.size;
    // return new Map(target)
    // newMap = new Map(target);
    // newMap.set('z',111);
    // return {target,newMap};

    // return target;

    for (const [char] of target) {
        if (stickers.every(sticker => !sticker.has(char))) return -1;
    }

    // return { stickers, target };

    return backTracking(new Map(), target, 0);

    function backTracking(repository, target, stickCount) {
        console.log();
        console.log({ repository });
        console.log({ target });
        console.log({ stickCount });

        // if (target.size == 0) {
        //     return stickCount;
        // }
        // else {
        // const newRepository = new Map();
        // const newTarget = new Map(target);
        // target = new Map(target);
        let changed = repository.size == 0;
        for (const [char, count] of repository) {
            if (target.has(char)) {
                const targetCount = target.get(char);
                if (count >= targetCount) {
                    target.delete(char);
                }
                else {
                    target.set(char, targetCount - count);
                }
                changed = true;
            }
        }

        // stickCount++;
        // for (const s of stickers) {

        // }
        if (target.size == 0) {
            return stickCount;
        }
        else {

            if (changed) {
                return Math.min(...stickers.map(s => backTracking(strToMap(s), new Map(target), stickCount + 1)));
            }
            else {
                return Infinity;
            }
        }
        // }
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