let points = [{x: 1, y: 2}, {x: 3, y: 4}, {x: null, y: 4}, {x: 3, y: undefined}];

points.map(point => {

	if (point.x !== 'number' || point.y !== 'number') {
		points.splice(points.indexOf(point + 1), 1);
	}
});

console.log(points);