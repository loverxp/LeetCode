class PriorityQueue {
    constructor(compare, array) {
        this.compare = compare;
        this.queue = [];
        this.length = 0;
        if (array) {
            for (const val of array) {
                this.push(val);
            }
        }
    }

    push(val) {
        // const i = this.queue.findIndex((v) => this.compare(val, v));
        const i = this.queue.findIndex((v) => this.compare(v, val));
        if (-1 == i) {
            this.queue.push(val);
        }
        else {
            this.queue.splice(i, 0, val);
        }
        this.length++;
    }

    top() {
        return this.queue[this.queue.length - 1];
    }

    pop() {
        this.length--;
        return this.queue.pop();
    }

    isEmpty() {
        return this.length == 0;
    }
}

exports.PriorityQueue = PriorityQueue;