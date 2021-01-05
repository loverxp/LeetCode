// https://leetcode-cn.com/problems/sparse-similarity-lcci/
var Test = require('../Common/Test');

var computeSimilarities = function (docs) {
    const result = [];
    for (let i = 0; i < docs.length - 1; i++) {
        const doc1 = docs[i];
        for (let j = i + 1; j < docs.length; j++) {
            const doc2 = docs[j];
            const union = new Set(doc1);
            for (const elem of doc2) {
                union.add(elem);
            }
            const unionSize = union.size;
            const intersectionSize = doc1.length + doc2.length - unionSize;

            if (intersectionSize > 0) {
                result.push(`${i},${j}: ${Number(intersectionSize / unionSize + 1e-9).toFixed(4)}`);
            }
        }
    }
    return result;
};

function test(docs) {
    Test.test(computeSimilarities, docs);
}

function testWithTestcase(docs) {
    Test.testWithTestcase(computeSimilarities, docs);
}

// test([[14, 15, 100, 9, 3], [32, 1, 9, 3, 5], [15, 29, 2, 6, 8, 7], [7, 10]]);
// test([[3722, 26354], [5476, 9892, 60292, 90762, 35531, 5199, 76176, 16596], [27427, 81667, 1613, 70007, 75900], [1396, 5407], [7117, 5965, 15405, 81980, 81846, 91223, 89436], [65025, 9892, 69707, 7117, 1613, 16398, 55956, 67832, 88346], [48200, 3722, 99375, 74768, 1457, 12211, 39388, 67710], [89250, 5407, 53864, 19691, 76940, 5965, 883, 1181, 46975], [29384, 5199, 1396, 21269, 75095, 70585, 85726, 95135], [1457, 5476]]);
testWithTestcase(89964192);