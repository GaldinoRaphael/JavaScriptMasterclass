const circles = new WeakSet();

const circle1 = new Circle(10);
const circle2 = {
    radius: 5
}

function Circle(radius) {
    circles.add(this);
    this.radius = radius;
}
console.log(circles.has(circle2))
Circle.prototype.calculateArea = function() {
    if(circles.has(this)) throw "Invalid Object";
    return Math.PI * Math.pow(this.radius, 2);
}


console.log(circle1.calculateArea.call(circle2));