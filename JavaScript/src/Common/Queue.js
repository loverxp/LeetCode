class Queue {
    constructor() {
        this.root = {}
        this.last = this.root;
        this.length = 0;
    }

    push(o) {
        this.last.next = { val: o };
        this.last = this.last.next;
        this.length++;
    }

    pop() {
        if (this.last != this.root) {
            const next = this.root.next;
            const val = next.val;
            this.root.next = next.next;
            if (next == this.last) this.last = this.root;
            this.length--;
            return val;
        }
        return undefined;
    }
}

exports.Queue = Queue;