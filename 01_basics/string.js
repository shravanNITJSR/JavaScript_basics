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

let url = "shravan@google.shravan@1712.com";
console.log(url.replace("@",'#'));

let sname = "/  beast at work";
console.log(sname.replace(" ",''));

let gameName = 'shravan-parmar-mp'
//form an aaray of string on basis of spli function on '-'
console.log(gameName.split('-'));

/*
1=> in substring starting index has to be positive or zero
2=> in slicing negative index will represent from the end/last of the string
    for slicing string must be continous or single word...
*/