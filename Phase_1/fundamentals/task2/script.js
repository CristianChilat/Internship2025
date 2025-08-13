const start = 0;
const end = 10;
let sum = 0;

for(let i = start; i <= end; i++){
    if (i % 2 === 0) {
        sum += i;
    }
}

console.log(sum);