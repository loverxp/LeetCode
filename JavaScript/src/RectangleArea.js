// https://leetcode.com/problems/rectangle-area/
function Point(x, y) {
    this.x = x;
    this.y = y;
}

function Rectangle(x1, y1, x2, y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.p1 = new Point(x1, y1); // left bottom
    this.p2 = new Point(x2, y1); // right bottom
    this.p3 = new Point(x2, y2); // right top
    this.p4 = new Point(x1, y2); // left top
    this.area = (x2 - x1) * (y2 - y1);
}

Rectangle.prototype.containPoint = function (point) {
    return this.containXY(point.x, point.y);
};

Rectangle.prototype.containXY = function (x, y) {
    return this.x1 < x && x < this.x2 && this.y1 < y && y < this.y2;
};

Rectangle.prototype.area = function () {
    let s = (this.x2 - this.x1) * (this.y2 - this.y1);
    return s;

};


// var computeArea = function (A, B, C, D, E, F, G, H) {
var computeArea = function (...args) {
    let rect1 = new Rectangle(...args);
    let rect2 = new Rectangle(...args.slice(4));

    const case1 = rect1.containPoint(rect2.p1);
    const case2 = rect1.containPoint(rect2.p2);
    const case3 = rect1.containPoint(rect2.p3);
    const case4 = rect1.containPoint(rect2.p4);

    /*
    switch (true) {
        case rect1.containPoint(rect2.p1):
            break;
        case rect1.containPoint(rect2.p1):
            break;
        case rect1.containPoint(rect2.p1):
            break;
        case rect1.containPoint(rect2.p1):
            break;
        default: return rect1.area + rect2.area;
    }
    */
};


function test1(...args) {
// function test() {
    console.log(...args);
    let rect1 = new Rectangle(...args);
    let rect2 = new Rectangle(...args.slice(4));
    console.log(rect1);
    console.log(rect2);
    console.log(rect1.y2);
    console.log(rect2.x1);

}

test1(-3, 0, 3, 4, 0, -1, 9, 2);