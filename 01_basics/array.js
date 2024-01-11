let myarr = [2, 5, 5.78, 17, 3799, 6]
console.log(myarr);

let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400

console.log(Array.of(score1,score2,score3,score4));



let temp = myarr.slice(0,4)
// console.log("A", temp);

// console.log(myarr); 

let temp2 = myarr.splice(2,2)
// console.log("B", temp2);

console.log(Array.from('shravan'));
//return an array of character


console.log(Array.from({name:'shravan'}));
//return an empty array since cannot form an array from ({name:'shravan'}) this object


/*
 => slice(range) fn return the disred part from the array
    changes does not reflect in orignal array
    (does not include the last range value provided)

 => splice(starting_index,number_of_element ) fn removes that part from the array
    changes does reflect in orignal array
    
 => push(element) fn insert the value at last/end in an array
 => unshift(element) fn insert the value at first/beggning in an array

 => pop() fn remove the element from last/end
 => shift() fn remove the element from front/beggning

 => include() fn returns the bollean return type
 */