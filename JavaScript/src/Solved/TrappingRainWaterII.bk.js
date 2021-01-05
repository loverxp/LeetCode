var trapRainWater = function (heightMap) {
    const height = heightMap[1];
    const heightLeft = heightMap[0];
    const heightRight = heightMap[2];
    const stack = [];
    let total = 0;

    height.forEach((bar, x) => {
        console.log('\n');
        console.log('start');

        console.log(stack);
        console.log({ bar });
        console.log({ total });

        if (stack.length == 0) {
            if (bar > 0) {
                stack.push(x);
            }
        }
        else {
            const i = stack[0];
            const first = height[i];
            if (bar < first) {
                const i = stack[stack.length - 1];
                if (bar > height[i]) {
                    const firstIndex = stack.findIndex(e => height[e] < bar);
                    for (let index = firstIndex; index < stack.length; index++) {
                        const i = stack[index];
                        total += bar - height[i];
                        stack[index] = x;
                    }
                }
            }
            else {
                for (let index = 1; index < stack.length; index++) {
                    const i = stack[index];
                    total += first - height[i];
                }
                stack.splice(0);
            }
            stack.push(x);
        }

        console.log('end:', { total });
        console.log(stack);
    });
    return total;
};

function test1(input) {
    console.log(trapRainWater(input));
}

// input1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

input1 = [[1, 4, 3, 1, 3, 2], [3, 2, 1, 3, 2, 4], [2, 3, 3, 2, 3, 1]];

test1(input1);