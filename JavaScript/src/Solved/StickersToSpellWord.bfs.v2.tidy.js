// https://leetcode-cn.com/problems/stickers-to-spell-word/
var Test = require('./Common/Test');

var minStickers = function (stickers, target) {
    stickers = prepareStickers(stickers);

    let stickCount = 1;
    let states = [makeCounter(target)];
    while (states.length) {
        const states2 = [];
        const keys = new Set();
        for (const target of states) {
            for (const sticker of stickers) {
                const newTarget = new Map(target);
                let changed = false;
                for (const [char, count] of sticker) {
                    if (newTarget.has(char)) {
                        const targetCount = newTarget.get(char);
                        if (count >= targetCount) {
                            newTarget.delete(char);
                        }
                        else {
                            newTarget.set(char, targetCount - count);
                        }
                        changed = true;
                    }
                }

                if (changed) {
                    if (newTarget.size == 0) {
                        return stickCount;
                    }
                    else {
                        let key = [...newTarget].reduce((key, [char, count]) => key + char + count, '');
                        if (!keys.has(key)) {
                            keys.add(key);
                            states2.push(newTarget);
                            // for (const sticker of stickers) {
                            //     states2.push([new Map(target), sticker]);
                            // }
                        }
                    }
                }
            }
        }
        stickCount++;
        states = states2;
    }
    return -1;

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

    function isDominates(sticker1, sticker2) {
        for (const [char, val] of sticker2) {
            if (!sticker1.has(char) || val > sticker1.get(char)) {
                return false;
            }
        }
        return true;
    }

    function prepareStickers(stickers) {
        const targetSet = new Set(target);
        const validStickers = [];

        for (const sticker of stickers) {
            const map = makeCounter(sticker)
            let valid = false;
            for (const char of sticker) {
                if (targetSet.has(char)) {
                    valid = true;
                }
                else {
                    map.delete(char);
                }
            }
            if (valid) validStickers.push(map);
        }

        const valids = Array(validStickers.length).fill(true);
        for (let i = 0; i < valids.length; i++) {
            if (valids[i]) {
                const sticker1 = validStickers[i];
                // for (let j = i + 1; j < valids.length; j++) {
                for (let j = 0; j < valids.length; j++) {
                    if (i != j) {
                        const sticker2 = validStickers[j];
                        // valids[j] = !(valids[j] && isDominates(sticker1, sticker2));
                        if (valids[j] && isDominates(sticker1, sticker2)) {
                            valids[j] = false;
                        }
                    }
                }
            }
        }

        const set = new Set();
        for (let i = 0; i < valids.length; i++) {
            if (valids[i]) {
                set.add(validStickers[i]);
            }
        }

        return set;
    }
};

function test(stickers, target) {
    Test.test(minStickers, stickers, target);
}

// test(["with", "example", "science"], "thehat");
// test(["notice", "possible"], "basicbasic");
// test(["aabb", "aabbb"], "basicbasic");
// test(["city", "would", "feel", "effect", "cell", "paint"], "putcat");
test(["heart", "seven", "consider", "just", "less", "back", "an", "four", "cost", "kill", "skin", "happen", "depend", "broad", "caught", "fast", "fig", "way", "under", "print", "white", "war", "sent", "locate", "be", "noise", "door", "get", "burn", "quite", "eight", "press", "eye", "wave", "bread", "wont", "short", "cow", "plain", "who", "well", "drive", "fact", "chief", "store", "night", "operate", "page", "south", "once"], "simpleexample");

// ["with", "example", "science"]
// "thehat"
// ["notice", "possible"]
// "basicbasic"
// ["city", "would", "feel", "effect", "cell", "paint"]
// "putcat"
// ["heart", "seven", "consider", "just", "less", "back", "an", "four", "cost", "kill", "skin", "happen", "depend", "broad", "caught", "fast", "fig", "way", "under", "print", "white", "war", "sent", "locate", "be", "noise", "door", "get", "burn", "quite", "eight", "press", "eye", "wave", "bread", "wont", "short", "cow", "plain", "who", "well", "drive", "fact", "chief", "store", "night", "operate", "page", "south", "once"]
// "simpleexample"

/*
Set {
    Map { 's' => 1, 'e' => 2 },
    Map { 'l' => 1, 'e' => 1, 's' => 2 },
    Map { 'i' => 1, 'l' => 2 },
    Map { 'a' => 1, 'p' => 2, 'e' => 1 },
    Map { 'a' => 1, 's' => 1 },
    Map { 'l' => 1, 'a' => 1, 'e' => 1 },
    Map { 'p' => 1, 'e' => 1, 's' => 2 },
    Map { 'p' => 1, 'l' => 1, 'a' => 1, 'i' => 1 },
    Map { 'e' => 1, 'l' => 2 },
    Map { 'p' => 1, 'e' => 2, 'a' => 1 }
  }
*/