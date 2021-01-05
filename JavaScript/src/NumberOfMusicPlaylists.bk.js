// https://leetcode-cn.com/problems/number-of-music-playlists/
var Test = require('./Common/Test');

class Playable extends Set {
    constructor(k) {
        this.k = k;
        this.queue = [];
    }

    add(val) {
        // if (this.queue.length == this.k) {
        //     this.delete(this.queue.shift());
        // }
        // this.queue.push(val);
        // this.add(val);
    }
}

var numMusicPlaylists = function (n, l, k) {
    const playable = new Playable(k);
    // return Array(n).keys();
    // const unplayed = new Set([...Array(n).keys()]);
    // return unplayed;
    for (let i = 0; i < l; i++) {

    }
};

function test(n, l, k) {
    Test.test(numMusicPlaylists, n, l, k);
}


test(3, 3, 1);
test(2, 3, 0);
test(2, 3, 1);