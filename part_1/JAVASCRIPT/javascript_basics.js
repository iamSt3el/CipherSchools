/*var x = 5;

{
    let x = 15;
    console.log(x);
}

console.log(x);
*/

//Arrow functions

/*var a = function (x, y) {
    return x + y;
}

const b = (x, y) =>{
    return x+y;
}

//console.log(a(10, 10));
console.log(b(10, 10));

*/

/*
const a = ["A", "B", "C", "D"];
const b = ["A", "B", "C", "D"];
const c = ["A", "B", "C", "D"];
const d = ["A", "B", "C", "D"];

//let g = [...a, ...b, ...c, ...d];
//let g = [a, b, c, d];
console.log(g);

*/


/* 
let arr = [79, 100, 34, 23];

let maxNumber = Math.max(...arr);

console.log(maxNumber);

*/

/*const arr = [34, 23, 49, 234];

let sum = 0;

for(let num of arr){
    sum = sum + num;
}

console.log(sum);

*/

/*const str = "HELLOHOWAREYOU"

let sum = "";

for(let ch of str){
    sum += ch + " ";
}

console.log(sum);

*/

/*
const a = new Map([
    ["a", 100],
    ["b", 200],
    ["c", 300],
    ["d", 400]
]);

console.log(a);

console.log(a.get("a"));

*/

/*const a = new Set();

a.add("a");
a.add("b");
a.add("b");

console.log(a);*/
//Classes in JavaScript

/*
class Calculator {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }

    area() {
        return this.calArea();
    }

    calArea(){
        return this.height * this.weight;
    }
}


const first = new Calculator(30, 20);

console.log(first);

console.log(first.area());

*/


const add = (...args) => {
    let sum = 0;

    for(let num of args){
        sum += num;
    }

    return sum;
}


console.log(add(10, 20, 30, 40));