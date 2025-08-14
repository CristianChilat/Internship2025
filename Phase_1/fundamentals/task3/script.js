const a = 30;
const b = 40;
const c = 3;

if (a === b && b === c){
    console.log("All numbers are equal");
} else {
    console.log(`The biggest numbers is ${Math.max(a, b, c)}`);
}

const comparison = (a > b && a > c) ? "a is the biggest number" : (b > a && b > c) ? "b is the biggest number" : (c > a && c > b) ? "c is the biggest number" : "all numbers are equal";

console.log(comparison);