let a = 0;
let b = 10;
let x = 0;
let y = 1;
let z = 0;
do{
	console.log(x);
	z = x + y;
	x = y;
	y = z;

	a++;
}while (a < b)
