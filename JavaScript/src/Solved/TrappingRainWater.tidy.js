var trap = function (height) {
    console.log(height);
    
    const stack = [];
    let total = 0;

    for (const bar of height) {
        if (stack.length == 0) {
            if (bar > 0) {
                stack.push(bar);
            }
        }
        else {
            const first = stack[0];
            if (bar < first) {
                if (bar > stack[stack.length - 1]) {
                    const firstIndex = stack.findIndex(e => e < bar);
                    for (let index = firstIndex; index < stack.length; index++) {
                        total += bar - stack[index];
                        stack[index] = bar;
                    }
                }
            }
            else {
                for (let index = 1; index < stack.length; index++) {
                    total += first - stack[index];
                }
                stack.splice(0);
            }
            stack.push(bar);
        }
    }
    return total;
};

function test1(input) {
    console.log(trap(input));
}

input1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];


test1(input1);