const score=400;
console.log(score);
const balance=new Number(100.345);
console.log(balance);
console.log(balance.toString());
console.log(typeof balance);   
console.log(balance.toFixed(2));

const otherNumber=233.5454;
console.log(otherNumber.toPrecision(3));

const hurndered=1000000;
console.log(hurndered.toLocaleString('en-IN'));

// ++++++++++++++++++++++++++++===maths=======+++++++++++++++++++
console.log(Math);
console.log(Math.floor(4.5));   // rounds down to the nearest integer
console.log(Math.ceil(5.2));    // rounds up to the nearest interger
console.log(Math.sqrt(4));       // returs the square root of x
console.log(Math.pow(2,3));       // returns the power of number
console.log(Math.min(1,2,3,4));     //returs the smallest value
console.log(Math.max(2,3,4,5,6));    // returns the greatest value
console.log(Math.random(0.3,0.45, 0.545,0.344));  //// generates the random number between o and 1
console.log(Math.PI);                            // return the value of pi
console.log(Math.round(4.8));                  // rounds the nearest integers
console.log(Math.abs(-4));                      // returns the absolute (positive) value of x 
console.log(Math.trunc(4.5));                   // returns the integer part and remove the decimal part

console.log((Math.random()*10)+1);
console.log(Math.random()*100);

const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min);


 