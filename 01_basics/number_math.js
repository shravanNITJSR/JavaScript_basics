let num = 400;
// console.log(num);

let score = new Number(2384.47583);
//returns an object of Number library
// console.log(score);
// console.log(typeof(score));

console.log(score.toFixed(2));
//tofixed function set the precision=2 after the decimal

console.log(score.toPrecision(7));
// set precision to-7 starting from left towards right....(2384.476)

console.log(score.toLocaleString);
//convert the number into indian or any readable standard 10,000 or 1,000




//##############-----------------------MATH---------------------##############

// console.log(Math);
//returns the math object type

console.log(Math.ceil(5.365));
//returns the  maximium round of value

console.log(Math.floor(5.365));
//returns the minimium round of value

console.log(Math.abs(-17));
//returns 17

console.log(Math.min(5,3,8,53,6,1,4));
console.log(Math.max(5,3,8,53,6,1,4));

//RANDOM FUNCTION
//=>generates the random values 
//=>highly used in project

//write a function that genrates the random values b/w the given range

let min = 10
let max = 100

console.log(Math.ceil(Math.random() * (max - min + 1)) + min);

/*
=> ((max - min) + 1) will give the upper range to random fn
=> (((max - min) + 1) + min) will give lowwer range
=> ciel fn will return the max value round off 
*/