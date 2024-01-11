let fname = "shravan"
let lname = "parmar"

console.log(fname + lname);

//creating string object using new string function 
let newString = new String("hitesthc");


console.log(newString.toLocaleUpperCase());
console.log(newString.trim());

let substr = newString.substring(0,8);
console.log(substr);


 let slicestr = newString.slice(-8,4);
 console.log(slicestr);
/*
1=> in substring starting index has to be positive or zero
2=> in slicing negative index will represent from the end/last of the string
    for slicing string must be continous or single word...
*/