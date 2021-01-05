// https://leetcode-cn.com/problems/stickers-to-spell-word/
var Test = require('./Common/Test');

var minStickers = function (stickers, target) {
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
    // return validStickers;
    // console.log({ validStickers });

    const valids = Array(validStickers.length).fill(true);
    for (let i = 0; i < valids.length; i++) {
        if (valids[i]) {
            const sticker1 = validStickers[i];
            // for (let j = i + 1; j < valids.length; j++) {
            for (let j = 0; j < valids.length; j++) {
                if (i != j) {
                    const sticker2 = validStickers[j];
                    // const isDominates1 = isDominates(sticker1, sticker2);
                    // const isDominates2 = isDominates(sticker2, sticker1);

                    // valids[j] = !(valids[j] && isDominates(sticker1, sticker2));
                    if (valids[j] && isDominates(sticker1, sticker2)) {
                        valids[j] = false;
                    }
                    // if (isDominates(sticker1, sticker2)) {
                    //     valids[j] = false;
                    // }
                    // else {
                    //     if (isDominates(sticker2, sticker1)) {
                    //         valids[i] = false;
                    //         break;
                    //     }
                    // }
                }
            }
        }
    }
    // console.log({ valids });

    stickers = new Set();
    for (let i = 0; i < valids.length; i++) {
        if (valids[i]) {
            stickers.add(validStickers[i]);
        }
    }
    // return stickers;

    let stickCount = 0;
    // let states = [[target, new Set()]];
    let states = [[makeCounter(target), new Set()]];
    while (states.length) {
        console.log();
        console.log();
        console.log(states);
        const states2 = [];
        for (const [target, sticker] of states) {
            let changed = sticker.size == 0;

            // for (const [char,targetCount] of target) {
            //     if (sticker.has(char)) {
            //         const count = sticker.get(char);
                    
            //     }
                
            // }
            // /*
            for (const [char, count] of sticker) {
                if (target.has(char) ) {
                // if (target.get(char) ) {
                    const targetCount = target.get(char);
                    if (count >= targetCount) {
                        target.delete(char);
                        // target.set(char, 0);
                    }
                    else {
                        target.set(char, targetCount - count);
                    }
                    changed = true;
                }
            }
            // */

            if (changed) {
                if (target.size == 0) {
                    return stickCount;
                }
                else {
                    for (const sticker of stickers) {
                        states2.push([new Map(target), sticker]);
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
        // console.log({ sticker1, sticker2 });
        // console.log(false);
        return true;
    }
};

function test(stickers, target) {
    Test.test(minStickers, stickers, target);
}

// test(["with", "example", "science"], "thehat");
// test(["notice", "possible"], "basicbasic");
// test(["aabb", "aabbb"], "basicbasic");
test(["city", "would", "feel", "effect", "cell", "paint"], "putcat");
// test(["heart", "seven", "consider", "just", "less", "back", "an", "four", "cost", "kill", "skin", "happen", "depend", "broad", "caught", "fast", "fig", "way", "under", "print", "white", "war", "sent", "locate", "be", "noise", "door", "get", "burn", "quite", "eight", "press", "eye", "wave", "bread", "wont", "short", "cow", "plain", "who", "well", "drive", "fact", "chief", "store", "night", "operate", "page", "south", "once"], "simpleexample");

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