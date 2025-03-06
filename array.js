 const myArray=[0,1,2,3,4,5,6,7];
// console.log(myArray[0]);

// // Array methods
// myArray.push(6);// push is use to add element from last in the array
// console.log(myArray);
// myArray.pop(); // to delete or remove an element from array in last
// console.log(myArray);

// myArray.unshift(9);   // add an element from first in the array;
// console.log(myArray); 

// myArray.shift();
// console.log(myArray);

// console.log(myArray.includes(9));// to check the element present in the array or not
// console.log(myArray.indexOf(3));

// const newArray=myArray.join();
// console.log(myArray);
// console.log(typeof newArray);


//slice   , splice
console.log("A", myArray);
const myn1=myArray.slice(1,3); // in slice it does not manupulate the or not change the array it gives only a slice of array
console.log(myn1);// slice consider the 1 and index -1 to working of slice method
console.log("B", myArray);


console.log(myn2);
const myn2=myArray.splice(1,3);// in splice it change the sturcture of array which means it cut the array and give a  slice or part or array
console.log(myn2);
