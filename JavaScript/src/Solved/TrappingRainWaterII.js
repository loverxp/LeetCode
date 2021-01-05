var trapRainWater = function (heightMap) {
    let total = 0;
    for (let i = 1; i < heightMap.length - 1; i++) {
        const heightRow = heightMap[i];
        for (let j = 1; j < heightRow.length - 1; j++) {
            const grid = heightRow[j];
            // const left = heightRow[j - 1];
            // const right = heightRow[j + 1];
            // const up = heightMap[i - 1][j];
            // const down = heightMap[i + 1][j];

        }
    }
};


function test1(input) {
    console.log(trapRainWater(input));
}


input1 = [[1, 4, 3, 1, 3, 2], [3, 2, 1, 3, 2, 4], [2, 3, 3, 2, 3, 1]];

test1(input1);