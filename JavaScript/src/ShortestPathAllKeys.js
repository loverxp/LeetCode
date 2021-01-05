// https://leetcode-cn.com/problems/shortest-path-to-get-all-keys/


var shortestPathAllKeys = function (grid) {
    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    const symbols = 'abcdefABCDEF@';
    const wall = '#';
    // const keys = 'abcdef';
    // const locks = 'ABCDEF';

    const maze = grid.map(s => s.split(''));
    const accessed = grid.map(s => s.split('').fill(false));

    const height = grid.length;
    const width = grid[0].length;
    const keys = [], locks = [];
    let start;
    let count = 0;
    prepare();

    console.log({ keys });
    console.log({ locks });

    // console.log(locks[1]);
    // console.log(locks[2]);

    console.log({ start });
    return;


    result = findTarget(start, keys[0]);  //Test
    // return findTarget(start,keys[1]);  //Test
    // result = findTarget(keys[1], keys[0]);  //Test
    console.log({ count });

    return result;


    function prepare() {
        let findCount = 0;
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const element = grid[y][x];
                const index = symbols.indexOf(element);
                if (-1 != index) {
                    // console.log('symbol:', symbols.charAt(index));
                    const charCode = symbols.charCodeAt(index);
                    if (index == 12) {
                        start = [x, y];
                    }
                    else if (index < 6) {
                        keys[charCode - 97] = [x, y];
                    }
                    else {
                        locks[charCode - 65] = [x, y];
                    }
                    if (findCount++ == symbols.length) return;
                }
            }
        }
    }

    function findTarget(start, target) {
        console.log({ start, target });

        const queue = [{
            position: start,
            step: 0
        }];

        while (queue.length > 0) {
            count++;
            const first = queue.shift();
            const { position: [x, y], step } = first;
            accessed[y][x] = true;
            if (x == target[0] && y == target[1]) {
                return step;
            }
            else {
                for (let index = 0; index < directions.length; index++) {
                    const [xOffset, yOffset] = directions[index];
                    const nextX = x + xOffset;
                    const nextY = y + yOffset;

                    // if (nextX >= 0 && nextY >= 0 && nextX < width && nextY < height && maze[nextY][nextX] != wall && !accessed[nextY][nextX]) {
                    if (nextX >= 0 && nextY >= 0 && nextX < width && nextY < height && !isWall(nextX, nextY) && !accessed[nextY][nextX]) {
                        if (-1 == queue.findIndex(({ position: [x, y], _ }) => x == nextX && y == nextY)) {
                            queue.push({
                                position: [nextX, nextY],
                                step: step + 1
                            });
                        }
                    }
                }
            }
        }
        return -1;
    }
    function isWall(x, y) {
        return maze[y][x] == wall;
    }
};

function logMaze(input) {
    console.log('\n');
    console.log(input.join('\n'));
    console.log('\n');
}

function test(input) {
    test1(input);
}

function test1(input) {
    logMaze(input);
    // return;
    console.time();
    const result = shortestPathAllKeys(input);
    console.log({ result });
    console.timeEnd();
}

input0 = ["@....", ".....", "....a"];
input1 = ["@.a.#", "###.#", "b.A.B"];
input2 = ["@..aA", "..B#.", "....b"];

input3 = [
    "@..bA",
    "..B#.",
    "....a"];

input9 = [
    "@.#a#b#...",
    "..#D#E#...",
    "F.........",
    "c#........",
    "##........",
    "........##",
    "........Ae",
    "........##",
    "........Cf",
    ".......d##"];
test(input0);
test(input1);
test(input2);
test1(input3);
test(input9);

// let i = 0, j = 0;
// console.log(++i);
// console.log(j++);

