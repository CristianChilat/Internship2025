let isPrime = null;

for (let i = 2; i <= 101; i++) {
    isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrime = false;
        }
    }
    if (isPrime) {
        console.log(i);
    }
}