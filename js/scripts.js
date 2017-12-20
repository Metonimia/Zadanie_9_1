function getTriangleArea (a, h) {
	if (a <= 0 || h <= 0) {
		return ("Nieprawidłowe dane");
	} else return (a * h) / 2;
}

var triangle1Area = getTriangleArea(43, 20);
var triangle2Area = getTriangleArea(0, 12);
var triangle3Area = getTriangleArea(8723, 0);

console.log(getTriangleArea(24, 6));
console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);


