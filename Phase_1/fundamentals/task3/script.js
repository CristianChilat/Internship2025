const a = 30;
const b = 40;
const c = 3;

if (a > b && a > c){
    console.log("a is the biggest number");
} else if (b > a && b > c){
    console.log("b is the biggest number");
} else if (c > a && c > b){
    console.log("c is the biggest number");
} else {
    console.log("all numbers are equal");
}

const comparison = (a > b && a > c) ? "a is the biggest number" : (b > a && b > c) ? "b is the biggest number" : (c > a && c > b) ? "c is the biggest number" : "all numbers are equal";

console.log(comparison);