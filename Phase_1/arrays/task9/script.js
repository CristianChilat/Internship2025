const arr = [1, 'a', 2, null, 3, undefined, 4, {}, 5, 6, `word`, 7, 8, false, 9, 100];

arr.map(item => {
	if (typeof item !== 'number' || item > 10){
		arr.splice(arr.indexOf(item), 1);
	}
})

console.log(arr);