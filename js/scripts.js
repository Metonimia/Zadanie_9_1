function getTriangleArea (a,h) {
	if (a <= 0 || h <= 0) {
		console.log("Nieprawidłowe dane")
	} else return a*h/2;
}

console.log(getTriangleArea(10,6));

var triangle1Area = getTriangleArea(43,20);
	triangle2Area = getTriangleArea(23,12);
	triangle3Area = getTriangleArea(8723,2763);